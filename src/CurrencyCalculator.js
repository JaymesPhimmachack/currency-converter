import React from 'react';
import CurrencyQuery from './CurrencyQuery';
/* global fetch */

class CurrencyCalculator extends React.Component {
	constructor(props) {
		super(props);
		this._isMounted = false;
		this.state = {
			isLoading: true,
			unit: 1,
			baseCurrency: 'USD',
			crossCurrency: 'EUR',
			rate: 0.89
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFirstSelectChange = this.handleFirstSelectChange.bind(this);
		this.handleSecondSelectChange = this.handleSecondSelectChange.bind(this);
		this.fetchCurrency = this.fetchCurrency.bind(this);
	}

	componentDidMount() {
		this._isMounted = true;
		this.fetchCurrency();
	}

	componentDidUpdate() {
		this.fetchCurrency();
	}

	componentWillUnmount() {
		this._isMounted = false;
		this.fetchCurrency();
	}

	fetchCurrency() {
		fetch(
			`https://alt-exchange-rate.herokuapp.com/latest?base=${this.state.baseCurrency}&symbols=${this.state
				.crossCurrency}`
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				if (this._isMounted) {
					this.setState({ isLoading: false, rate: data.rates[this.state.crossCurrency] });
				}
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
	}

	handleSecondSelectChange(crossCurrency) {
		this.setState({ crossCurrency });
	}

	render() {
		return (
			<div className="row">
				<h3 className="text-center col-12">Currency Calculator</h3>

				<div className="col-xs-12 col-md-4 mt-4">
					<CurrencyQuery
						unit={this.state.unit}
						baseCurrency={this.state.baseCurrency}
						crossCurrency={this.state.crossCurrency}
						handleInputChange={this.handleInputChange}
						handleFirstSelectChange={this.handleFirstSelectChange}
						handleSecondSelectChange={this.handleSecondSelectChange}
					/>
				</div>
				<div className="col-xs-12 col-md-8 mt-4 vh-100">
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
		);
	}
}

export default CurrencyCalculator;
