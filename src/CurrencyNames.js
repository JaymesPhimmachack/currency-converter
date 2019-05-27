import React from 'react';

let currencyList = [
	{ symbol: 'USD', name: 'US dollar' },
	{ symbol: 'EUR', name: 'European euro' },
	{ symbol: 'JPY', name: 'Japanese yen' },
	{ symbol: 'BGN', name: 'Bulgarian lev' },
	{ symbol: 'CZK', name: 'Czech koruna' },
	{ symbol: 'DKK', name: 'Danish krone' },
	{ symbol: 'GBP', name: 'Pound sterling' },
	{ symbol: 'HUF', name: 'Hungarian forint' },
	{ symbol: 'PLN', name: 'Polish zloty' },
	{ symbol: 'RON', name: 'Romanian leu' },
	{ symbol: 'SEK', name: 'Swedish krona' },
	{ symbol: 'CHF', name: 'Swiss franc' },
	{ symbol: 'ISK', name: 'Icelandic krona' },
	{ symbol: 'NOK', name: 'Norwegian krone' },
	{ symbol: 'HRK', name: 'Croatian kuna' },
	{ symbol: 'RUB', name: 'Russian rouble' },
	{ symbol: 'TRY', name: 'Turkish lira' },
	{ symbol: 'AUD', name: 'Australian dollar' },
	{ symbol: 'BRL', name: 'Brazilian real' },
	{ symbol: 'CAD', name: 'Canadian dollar' },
	{ symbol: 'CNY', name: 'Chinese yuan renminbi' },
	{ symbol: 'HKD', name: 'Hong Kong dollar' },
	{ symbol: 'IDR', name: 'Indonesian rupiah' },
	{ symbol: 'ILS', name: 'Israeli shekel' },
	{ symbol: 'INR', name: 'Indian rupee' },
	{ symbol: 'KRW', name: 'South Korean won' },
	{ symbol: 'MXN', name: 'Mexican peso' },
	{ symbol: 'MYR', name: 'Malaysian ringgit' },
	{ symbol: 'NZD', name: 'New Zealand dollar' },
	{ symbol: 'PHP', name: 'Philippine peso' },
	{ symbol: 'SGD', name: 'Singapore dollar' },
	{ symbol: 'THB', name: 'Thai baht' },
	{ symbol: 'ZAR', name: 'South African rand' }
];

const CurrencyNames = (props) => {
	let currencyOptions = currencyList.map((currency) => (
		<option key={currency.symbol} value={currency.symbol}>
			{currency.symbol} - {currency.name}
		</option>
	));

	return (
		<select value={props.value} onChange={props.onChange} className="mb-3 mr-2 d-flex w-100">
			{currencyOptions}
		</select>
	);
};

export default CurrencyNames;
