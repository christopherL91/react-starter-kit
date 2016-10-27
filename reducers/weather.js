'use strict';

import {TEMPERATURE} from '../actions/weather.js';

const initialState = {
    temperature: 0
};

const weather = (state = initialState, action) => {
    switch (action.type) {
        case TEMPERATURE:
            return {temperature: action.temperature}
        default:
            return state;
    }
};

export default weather;
