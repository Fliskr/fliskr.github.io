import React from 'react';
import {Link} from 'react-router';
const Tiles = React.createClass({
	render() {
		return (
			<div className='tile-container'>
			{this.props.routes[0].childRoutes.map((route,i) => <Link to={route.path} key={i} i={i} className='tile' {...route} >{route.title}</Link>)}
			</div>
		)
	}
});

export default Tiles;