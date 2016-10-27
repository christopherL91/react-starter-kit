'use strict';

import {combineReducers} from 'redux';

import counter from './counter.js';
import weather from './weather.js';

export default combineReducers({
    counter,
    weather,
});
