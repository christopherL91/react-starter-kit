'use strict';

import {combineReducers} from 'redux';

import counter from './counter.js';

//  Add all reducers here and combine into root reducer.
export default combineReducers({
    counter,
});
