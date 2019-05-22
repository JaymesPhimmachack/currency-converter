import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <nav>
                <a>FX Change<span>Currency Converter</span></a>
                <a>Home</a>
                <a>Currency Calculator</a>
            </nav>    
        );
    }
}


export default Header;