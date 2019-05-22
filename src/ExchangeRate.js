import React from 'react';
import CurrencyQuery from './CurrencyQuery';



class ExchangeRate extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            unit: 1,
            baseCurrencySymbol: 'USD',
            baseCurrency: 'Dollar',
            crossCurrencySymbol: 'EUR',
            crossCurrency: 'Euro'
        };
    }
    
    render () {
        return (
            <div>
            <h1>Exchange Rate</h1>
                <CurrencyQuery />
                <p>Rate Table</p>
                
            </div>    
        );
    }
}

export default ExchangeRate;