import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import ExchangeRate from './ExchangeRate';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Nav />
      <ExchangeRate />
      <Footer />
    </div>
  );
};

export default App;
