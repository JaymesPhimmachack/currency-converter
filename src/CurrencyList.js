import React from 'react';

const CurrencyList = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>US Dollar</th>
                    <th>1.00 USD</th>
                    <th>inv. 1.00 USD</th>
                </tr>
            </thead>
            <tbody>
            props.currencies.map((currency)=> {
                <tr>
                    <td>{}</td>
                    <td>{}</td>
                    <td>{}</td>
                </tr>
            });
            </tbody>
        </table>    
    );
};


export default CurrencyList;