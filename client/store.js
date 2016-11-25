import { createStore,compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import comments from './data/comments.js';
import posts from './data/posts.js';
import zeros from './data/zeros.js';
// const rows=3;
const defaultState = {
	posts,
	comments,
	zeros
};



const store = createStore(rootReducer,defaultState,window.devToolsExtension && window.devToolsExtension());

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
	module.hot.accept('./reducers/',()=>{
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	})
}

export default store;;