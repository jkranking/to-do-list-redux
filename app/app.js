"use strict"

import React from 'react';
import {render} from 'react-dom';
import App from './config/routes'
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reducers from './index.js';
import {postItem, getItems, updateItem, deleteItem} from './actions';

// step 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

render(
	<Provider store={store}>
	 	<div>
	 		<App />
	 	</div>
	</Provider>, document.querySelector( '.js-app' )
);
