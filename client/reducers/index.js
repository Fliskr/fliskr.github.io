import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts.js';
import comments from './comments.js';
import zeros from './zeros.js';
const rootReducer = combineReducers({zeros,  posts, comments, routing: routerReducer })

export default rootReducer;
