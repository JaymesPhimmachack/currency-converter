import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

        return (
                <div className="row">
                <Link to="/">FX Change</Link><span>Currency Converter</span>
            <div>
                <Link to="/">Home</Link>
                <Link to="/currency-calculator">Currency Calculator</Link>
            </div> 
                </div>

        );

};


export default Header;