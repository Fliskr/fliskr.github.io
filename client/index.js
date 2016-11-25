import React from 'react';

import { render } from 'react-dom';
import css from './styles/style.styl';

//import components

import Single from './components/Single.js';
import Tiles from './components/Tiles.js';

//import react router deps
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, {history} from './store.js';
import routes from './routes';
const mapRouter = function(route,i){ 
	return (
		<Route path={route.src} component={route.component} title={route.title} {...route} key={i} /> 
	)};

const router=(
	<Provider store={store} >
		<Router history={history}>
			<Route path={routes.src} component={routes.component} >
				<IndexRoute component={Tiles}></IndexRoute>
				{routes.children.map(mapRouter)}
			</Route>
		</Router>
	</Provider>
	)

render(router, document.getElementById('root'));