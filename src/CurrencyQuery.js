import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import CurrencyNames from './CurrencyNames';

class CurrencyQuery extends React.Component {
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	};

	render() {
		return (
			<form>
				<input
					type="number"
					value={this.props.unit}
					onChange={(e) => this.props.handleInputChange(e.target.value)}
					className="mb-3 mr-2 d-flex w-100"
				/>

				<CurrencyNames
					value={this.props.baseCurrency}
					onChange={(e) => this.props.handleFirstSelectChange(e.target.value)}
				/>

				{this.props.location.pathname === '/currency-calculator' && (
					<CurrencyNames
						value={this.props.crossCurrency}
						onChange={(e) => this.props.handleSecondSelectChange(e.target.value)}
					/>
				)}
			</form>
		);
	}
}

export default withRouter(CurrencyQuery);
