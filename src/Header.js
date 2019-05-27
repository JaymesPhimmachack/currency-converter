import React from 'react';
import { Link } from 'react-router-dom';
import { FaRandom } from 'react-icons/fa';

const Header = () => {
	return (
		<div className="row">
			<div className="col-12">
				<span className="mr-2">
					<FaRandom />
				</span>
				<Link to="/">FX Change</Link>
				<span className="mx-3">Currency Converter</span>
				<div>
					<Link to="/">Home</Link>
					<Link to="/currency-calculator" className="ml-3">
						Currency Calculator
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
