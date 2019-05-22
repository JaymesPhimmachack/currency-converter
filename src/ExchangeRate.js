import React from 'react';
import Currency from './Currency';
import CurrencyCalculator from './CurrencyCalculator';

class ExchangeRate extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            quantity: 1,
            baseCurrencySymbol: 'USD',
            baseCurrency: 'Dollar',
            pairCurrencySymbol: 'EUR',
            pairCurrency: 'Euro'
        };
    }
    
    render () {
        return (
            <div>
            Exchange Rate
                <Currency />
                <div>Rate Table</div>
                <CurrencyCalculator />
                <div>Currency Calculator Output</div>
            </div>    
        );
    }
}

export default ExchangeRate;