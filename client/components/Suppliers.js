import React from 'react';
import Table from './Table.js';
const Suppliers = React.createClass({
	render() {
		return (
			<div className='photo-grid'>
				<Table {...this.props} />
			</div>
		)
	}
});

export default Suppliers;