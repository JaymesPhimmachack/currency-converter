import React from 'react';
import CurrencyQuery from './CurrencyQuery';
  
class CurrencyCalculator extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            unit: 1.00,
            baseCurrency: 'USD',
            crossCurrency: 'EUR',
            rate: 0.89
        };
        this.handleCurrencyResponse = this.handleCurrencyResponse.bind(this);
        this.handleCalculatorInput = this.handleCalculatorInput.bind(this);
        this.handleCalculatorFirstSelectChange = this.handleCalculatorFirstSelectChange.bind(this);
        this.handleCalculatorSecondSelectChange = this.handleCalculatorSecondSelectChange.bind(this);
    }
    
    handleCurrencyResponse (baseCurrency, rate, crossCurrency, unit) {
        this.setState({ unit, baseCurrency, crossCurrency, rate });
    }
    
    handleCalculatorInput(unit) {
        this.setState({ unit });
    }
            
    handleCalculatorFirstSelectChange (baseCurrency) {
        this.setState({ baseCurrency });
    }
    
    handleCalculatorSecondSelectChange (crossCurrency) {
        this.setState({ crossCurrency });
    }

    render () {
        return (
            <div className="row">
                <h3 className="text-center col-12">Currency Calculator</h3>

                <div className="col-xs-12 col-md-4 mt-4">
                    <CurrencyQuery 
                        handleCurrencyResponse={this.handleCurrencyResponse} 
                        handleCalculatorInput={this.handleCalculatorInput}
                        handleCalculatorFirstSelectChange = {this.handleCalculatorFirstSelectChange}
                        handleCalculatorSecondSelectChange = {this.handleCalculatorSecondSelectChange}
                    />
                </div>    
                <div className="col-xs-12 col-md-8 mt-4 vh-100">
                    <h6>Currency Rate</h6>
                    <span>{this.state.unit} {this.state.baseCurrency}</span>  = <span>{this.state.crossCurrency} {this.state.rate * this.state.unit}</span>
                </div>
   
        </div>
        );
    }
}

export default CurrencyCalculator;