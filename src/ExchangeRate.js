import React from 'react';
import CurrencyQuery from './CurrencyQuery';

class ExchangeRate extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            unit: 1.00,
            baseCurrency: 'USD',
            rates: [],
            currencyNames: {
              "USD": "US dollar",
              "EUR": "European euro",
              "JPY": "Japanese yen",
              "BGN": "Bulgarian lev",
              "CZK": "Czech koruna",
              "DKK": "Danish krone",
              "GBP": "Pound sterling",
              "HUF": "Hungarian forint",
              "PLN": "Polish zloty",
              "RON": "Romanian leu",
              "SEK": "Swedish krona",
              "CHF": "Swiss franc",
              "ISK": "Icelandic krona",
              "NOK": "Norwegian krone",
              "HRK": "Croatian kuna",
              "RUB": "Russian rouble",
              "TRY": "Turkish lira",
              "AUD": "Australian dollar",
              "BRL": "Brazilian real",
              "CAD": "Canadian dollar",
              "CNY": "Chinese yuan renminbi",
              "HKD": "Hong Kong dollar",
              "IDR": "Indonesian rupiah",
              "ILS": "Israeli shekel",
              "INR": "Indian rupee",
              "KRW": "South Korean won",
              "MXN": "Mexican peso",
              "MYR": "Malaysian ringgit",
              "NZD": "New Zealand dollar",
              "PHP": "Philippine peso",
              "SGD": "Singapore dollar",
              "THB": "Thai baht",
              "ZAR": "South African rand"
            }
        };
        this.handleCurrenciesResponse = this.handleCurrenciesResponse.bind(this);
        this.handleRateTableInput= this.handleRateTableInput.bind(this);
        this.handleRateTableFirstSelectChange = this.handleRateTableFirstSelectChange(this);

    }
    
    handleCurrenciesResponse (unit, data) {
        this.setState({ unit: unit, baseCurrency: data.base, rates: data.rates });
    }
     
    handleRateTableInput (unit) {
        this.setState({ unit });
    }
    
    handleRateTableFirstSelectChange (baseCurrency) {
        this.setState({ baseCurrency });
    }
    
    renderTable = () => {
        let rateList = [];
        
        for (var rate in this.state.rates) {
            if (rate !== this.state.baseCurrency) {
              rateList.push(  
               <tr key={rate}>
                <td>{this.state.currencyNames[rate]}</td>
                <td>{this.state.rates[rate].toFixed(2) * this.state.unit}</td>
               </tr>
              );
             }
        }
        
        return (
          <table className="table">
            <thead>
              <tr>
              <th scope="col">{this.state.currencyNames[this.state.baseCurrency]}</th>
              <th scope="col">{this.state.unit} {this.state.baseCurrency}</th>
              </tr>
            </thead> 
            <tbody>
              {  rateList }
            </tbody>
          </table>   
        );
                
    }
    
    render () {
      
        return (
          <div>
            <h3 className="text-center">Exchange Rate</h3>
            <div className="row">
            <div className="col-4 mt-4">
              <CurrencyQuery 
                handleCurrenciesResponse={this.handleCurrenciesResponse} 
                handleRateTableInput={this.handleRateTableInput} 
                handleRateTableFirstSelectChange={this.handleRateTableFirstSelectChange}
              />
            </div>
              <div className="col-8 mt-4">
            <h6>Rate Table</h6>
             
            { this.renderTable() }
            </div>
            </div>
          </div>    
        );
    }
}

export default ExchangeRate;