"use strict"
import {combineReducers} from 'redux';
import {itemReducers} from './itemReducers';

// here combine the reducers so we can have them under a single state object
export default combineReducers({
	items: itemReducers,
})