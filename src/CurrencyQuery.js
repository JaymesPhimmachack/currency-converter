import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
/* global fetch */

class CurrencyQuery extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            unit: 1,
            baseCurrency: 'USD',
            crossCurrency: 'EUR',
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFirstSelectChange = this.handleFirstSelectChange.bind(this);
        this.handleSecondSelectChange = this.handleSecondSelectChange.bind(this);
        this.fetchCurrencies = this.fetchCurrencies.bind(this);
        this.fetchCurrency = this.fetchCurrency.bind(this);
    }
    
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }
    
    componentDidMount () {
        this.fetchCurrencies();
    }
    
     componentWillUnmount () {
          this.fetchCurrencies();
     }
    
    componentDidUpdate() {
        const { location } = this.props;
        
        if (location.pathname === '/currency-calculator' ) {
            this.fetchCurrency();

        }else {
           this.fetchCurrencies();
        }
    }
    
    fetchCurrencies () {

        fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=${this.state.baseCurrency}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.props.handleCurrenciesResponse(this.state.unit, data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    fetchCurrency () {
        fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=${this.state.baseCurrency}&symbols=${this.state.crossCurrency}`)
         .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.props.handleCurrencyResponse(data.base, data.rates[this.state.crossCurrency].toFixed(2), this.state.crossCurrency, this.state.unit);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    handleInputChange (event) {
        const { location } = this.props;

        if (event.target.value !== '') {
            this.setState({ unit: event.target.value });
            
            if (location.pathname === '/currency-calculator' ) {
                this.props.handleCalculatorInput(event.target.value);
            } else {
                this.props.handleRateTableInput(event.target.value);
            }
        }
       
    }
    
    handleFirstSelectChange (event) {
        const { location } = this.props;
        
        this.setState({ baseCurrency: event.target.value });
        
       if (location.pathname === '/currency-calculator') {
           this.props.handleCalculatorFirstSelectChange(event.target.value );
       } else {       

           this.props.handleRateTableFirstSelectChange(event.target.value);
       }
    
    }
    
    handleSecondSelectChange (event) {
        const { location } = this.props;
        this.setState({ crossCurrency: event.target.value });
        
         if (location.pathname === '/currency-calculator') {
           this.props.handleCalculatorSecondSelectChange(event.target.value);
       }  
      
    }
    
    render () {
        const { location } = this.props;


        return (
             <form>
                <input type="number" value={this.state.unit} onChange={this.handleInputChange} className="mb-3"/>
                <select value={this.state.baseCurrency} onChange={this.handleFirstSelectChange} className="mb-3">
                  <option value="USD">USD  - US dollar</option>
                  <option value="EUR">EUR  - European euro</option>
                  <option value="JPY">JPY  - Japanese yen</option>
                  <option value="BGN">BGN  - Bulgarian lev</option>
                  <option value="CZK">CZK  - Czech koruna</option>
                  <option value="DKK">DKK  - Danish krone</option>
                  <option value="GBP">GBP  - Pound sterling</option>
                  <option value="HUF">HUF  - Hungarian forint</option>
                  <option value="PLN">PLN  - Polish zloty</option>
                  <option value="RON">RON  - Romanian leu</option>
                  <option value="SEK">SEK  - Swedish krona</option>
                  <option value="CHF">CHF  - Swiss franc</option>
                  <option value="ISK">ISK  - Icelandic krona</option>
                  <option value="NOK">NOK  - Norwegian krone</option>
                  <option value="HRK">HRK  - Croatian kuna</option>
                  <option value="RUB">RUB  - Russian rouble</option>
                  <option value="TRY">TRY  - Turkish lira</option>
                  <option value="AUD">AUD  - Australian dollar</option>
                  <option value="BRL">BRL  - Brazilian real</option>
                  <option value="CAD">CAD  - Canadian dollar</option>
                  <option value="CNY">CNY  - Chinese yuan renminbi</option>
                  <option value="HKD">HKD  - Hong Kong dollar</option>
                  <option value="IDR">IDR  - Indonesian rupiah</option>
                  <option value="ILS">ILS  - Israeli shekel</option>
                  <option value="INR">INR  - Indian rupee</option>
                  <option value="KRW">KRW  - South Korean won</option>
                  <option value="MXN">MXN  - Mexican peso</option>
                  <option value="MYR">MYR  - Malaysian ringgit</option>
                  <option value="NZD">NZD  - New Zealand dollar</option>
                  <option value="PHP">PHP  - Philippine peso</option>
                  <option value="SGD">SGD  - Singapore dollar</option>
                  <option value="THB">THB  - Thai baht</option>
                  <option value="ZAR">ZAR  - South African rand</option>
                </select>
              { location.pathname === '/currency-calculator' &&
                <select value={this.state.crossCurrency} onChange={this.handleSecondSelectChange}>
                  <option value="USD">USD  - US dollar</option>
                  <option value="EUR">EUR  - European euro</option>
                  <option value="JPY">JPY  - Japanese yen</option>
                  <option value="BGN">BGN  - Bulgarian lev</option>
                  <option value="CZK">CZK  - Czech koruna</option>
                  <option value="DKK">DKK  - Danish krone</option>
                  <option value="GBP">GBP  - Pound sterling</option>
                  <option value="HUF">HUF  - Hungarian forint</option>
                  <option value="PLN">PLN  - Polish zloty</option>
                  <option value="RON">RON  - Romanian leu</option>
                  <option value="SEK">SEK  - Swedish krona</option>
                  <option value="CHF">CHF  - Swiss franc</option>
                  <option value="ISK">ISK  - Icelandic krona</option>
                  <option value="NOK">NOK  - Norwegian krone</option>
                  <option value="HRK">HRK  - Croatian kuna</option>
                  <option value="RUB">RUB  - Russian rouble</option>
                  <option value="TRY">TRY  - Turkish lira</option>
                  <option value="AUD">AUD  - Australian dollar</option>
                  <option value="BRL">BRL  - Brazilian real</option>
                  <option value="CAD">CAD  - Canadian dollar</option>
                  <option value="CNY">CNY  - Chinese yuan renminbi</option>
                  <option value="HKD">HKD  - Hong Kong dollar</option>
                  <option value="IDR">IDR  - Indonesian rupiah</option>
                  <option value="ILS">ILS  - Israeli shekel</option>
                  <option value="INR">INR  - Indian rupee</option>
                  <option value="KRW">KRW  - South Korean won</option>
                  <option value="MXN">MXN  - Mexican peso</option>
                  <option value="MYR">MYR  - Malaysian ringgit</option>
                  <option value="NZD">NZD  - New Zealand dollar</option>
                  <option value="PHP">PHP  - Philippine peso</option>
                  <option value="SGD">SGD  - Singapore dollar</option>
                  <option value="THB">THB  - Thai baht</option>
                  <option value="ZAR">ZAR  - South African rand</option>
                </select>
              }
             </form>
        );
    }
}

export default withRouter(CurrencyQuery);