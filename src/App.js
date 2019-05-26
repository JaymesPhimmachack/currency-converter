import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ExchangeRate from './ExchangeRate';
import CurrencyCalculator from './CurrencyCalculator';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
          <Switch>
           <Route path="/" exact component={ExchangeRate} />
           <Route path="/currency-calculator" component={CurrencyCalculator} />
          </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
