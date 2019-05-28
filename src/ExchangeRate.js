import React from 'react';
import CurrencyQuery from './CurrencyQuery';
/* global fetch */

class ExchangeRate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loadingData: true,
			unit: 1.0,
			baseCurrency: 'USD',
			rates: [],
			currencyNames: {
				USD: 'US dollar',
				EUR: 'European euro',
				JPY: 'Japanese yen',
				BGN: 'Bulgarian lev',
				CZK: 'Czech koruna',
				DKK: 'Danish krone',
				GBP: 'Pound sterling',
				HUF: 'Hungarian forint',
				PLN: 'Polish zloty',
				RON: 'Romanian leu',
				SEK: 'Swedish krona',
				CHF: 'Swiss franc',
				ISK: 'Icelandic krona',
				NOK: 'Norwegian krone',
				HRK: 'Croatian kuna',
				RUB: 'Russian rouble',
				TRY: 'Turkish lira',
				AUD: 'Australian dollar',
				BRL: 'Brazilian real',
				CAD: 'Canadian dollar',
				CNY: 'Chinese yuan renminbi',
				HKD: 'Hong Kong dollar',
				IDR: 'Indonesian rupiah',
				ILS: 'Israeli shekel',
				INR: 'Indian rupee',
				KRW: 'South Korean won',
				MXN: 'Mexican peso',
				MYR: 'Malaysian ringgit',
				NZD: 'New Zealand dollar',
				PHP: 'Philippine peso',
				SGD: 'Singapore dollar',
				THB: 'Thai baht',
				ZAR: 'South African rand'
			}
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFirstSelectChange = this.handleFirstSelectChange.bind(this);
		this.fetchCurrencies = this.fetchCurrencies.bind(this);
	}

	componentDidMount() {
		this.fetchCurrencies();
	}

	fetchCurrencies() {
		fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=${this.state.baseCurrency}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
					this.setState({ loadingData: false, rates: data.rates });
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
		this.fetchCurrencies();
	}

	renderTable = () => {
		let rateList = [];
		for (var rate in this.state.rates) {
			if (rate !== this.state.baseCurrency) {
				rateList.push(
					<tr key={rate}>
						<td>{this.state.currencyNames[rate]}</td>
						<td>{(this.state.rates[rate] * this.state.unit).toFixed(4)}</td>
					</tr>
				);
			}
		}
		return (
			<table className="table">
				<thead>
					<tr>
						<th scope="col">{this.state.currencyNames[this.state.baseCurrency]}</th>
						<th scope="col">
							{this.state.unit} {this.state.baseCurrency}
						</th>
					</tr>
				</thead>
				<tbody>{rateList}</tbody>
			</table>
		);
	};
	
	render() {
		return (
			<div>
				<h3 className="text-center">Exchange Rate</h3>
				<div className="row">
					<div className="col-xs-12 col-md-4 mt-4">
						<CurrencyQuery
							unit={this.state.unit}
							baseCurrency={this.state.baseCurrency}
							handleInputChange={this.handleInputChange}
							handleFirstSelectChange={this.handleFirstSelectChange}
						/>
					</div>
					<div className="col-xs-12 col-md-8 mt-4">
						<h6>Rate Table</h6>
						{this.renderTable()}
					</div>
				</div>
			</div>
		);
	}
}

export default ExchangeRate;
