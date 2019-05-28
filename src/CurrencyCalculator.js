import React from 'react';
import CurrencyQuery from './CurrencyQuery';
import Chart from 'chart.js';
/* global fetch */
/* global URLSearchParams*/

class CurrencyCalculator extends React.Component {
	constructor(props) {
		super(props);
		const params = new URLSearchParams(props.location.search);
		
		this.state = {
			isLoading: true,
			unit: 1,
			baseCurrency: params.get('baseCurrency') || 'USD',
			crossCurrency: params.get('crossCurrency') || 'EUR',
			rate: 0.89
		};

    this.chartRef = React.createRef();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFirstSelectChange = this.handleFirstSelectChange.bind(this);
		this.handleSecondSelectChange = this.handleSecondSelectChange.bind(this);
		this.fetchCurrency = this.fetchCurrency.bind(this);
		this.getHistoricalRates = this.getHistoricalRates.bind(this);
		this.buildChart = this.buildChart.bind(this);
	}

	componentDidMount() {
		this.fetchCurrency(this.state.baseCurrency, this.state.crossCurrency);
		this.getHistoricalRates(this.state.baseCurrency, this.state.crossCurrency);
	}

	fetchCurrency(baseCurrency, crossCurrency) {
		fetch(
			`https://alt-exchange-rate.herokuapp.com/latest?base=${baseCurrency}&symbols=${crossCurrency}`
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
					this.setState({ isLoading: false, rate: data.rates[crossCurrency] });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	handleInputChange(unit) {
		this.setState({ unit });
	}

	handleFirstSelectChange(baseCurrency) {
		this.setState({ baseCurrency });
		this.fetchCurrency(baseCurrency, this.state.crossCurrency);
		this.getHistoricalRates(baseCurrency, this.state.crossCurrency);
	}

	handleSecondSelectChange(crossCurrency) {
		this.setState({ crossCurrency });
		this.fetchCurrency(this.state.baseCurrency, crossCurrency);
		this.getHistoricalRates(this.state.baseCurrency, crossCurrency);
	}
	
	getHistoricalRates(baseCurrency, crossCurrency) {
		const endDate = new Date().toISOString().split('T')[0];
		const startDate = new Date((new Date()).getTime() - (30 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
		
		fetch(
			`https://alt-exchange-rate.herokuapp.com/history?start_at=${startDate}&end_at=${endDate}&base=${baseCurrency}&symbols=${crossCurrency}`
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
					if (data.error) {
						throw new Error(data.error);
					}
					
					const chartLabels = Object.keys(data.rates);
					const chartData = Object.values(data.rates).map(rate => rate[crossCurrency]);
					const chartLabel = `${baseCurrency}/${crossCurrency}`;
					
					this.buildChart(chartLabels, chartData, chartLabel);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	
	buildChart (labels, data, label) {
		const chartRef = this.chartRef.current.getContext('2d');
		
		if(typeof this.chart !== 'undefined') {
			this.chart.destroy();
		}
		
		this.chart = new Chart(chartRef, {
			type: 'line',
			data: {
				labels,
				datasets: [
				{
					label: label,
					data,
					fill: false,
					tension: 0
				}
				]
			},
			options: {
				responsive: true
			}
		})
	}
	
	render() {
		return (
			<React.Fragment>
				<div className="row">
					<h3 className="text-center col-12">Currency Calculator</h3>
	
					<div className="col-xs-12 col-md-5 mt-4 mb-3 mx-auto">
						<CurrencyQuery
							unit={this.state.unit}
							baseCurrency={this.state.baseCurrency}
							crossCurrency={this.state.crossCurrency}
							handleInputChange={this.handleInputChange}
							handleFirstSelectChange={this.handleFirstSelectChange}
							handleSecondSelectChange={this.handleSecondSelectChange}
						/>
					</div>
					<div className="col-xs-12 col-md-5 mt-4 mb-3 mx-auto">
						<h6>Currency Rate</h6>
						<span>
							{this.state.unit} {this.state.baseCurrency}
						</span>{' '}
						={' '}
						<span>
							{this.state.crossCurrency} {(this.state.rate * this.state.unit).toFixed(4)}
						</span>
					</div>
				</div>
				<div className="row mb-5">
					<canvas ref={this.chartRef} />
				</div>
			</React.Fragment>
		);
	}
}

export default CurrencyCalculator;
