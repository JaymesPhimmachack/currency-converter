import React from 'react';
import CurrencyQuery from './CurrencyQuery';

class CurrencyCalculator extends React.Component {
    render () {
        return (
            <div>
            <h1>Currency Calculator</h1>
            <CurrencyQuery />
            <div>Currency Calculator Output</div>
            </div>
        );
    }
}

export default CurrencyCalculator;