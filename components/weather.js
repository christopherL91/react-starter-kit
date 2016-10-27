'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {tempAsync} from '../actions/weather.js';

const Weather = ({temperature, tempAsync}) => {
    tempAsync();
    return (
        <div>Temperature {temperature} C</div>
    );
};

export default connect(
    state => {
        const {temperature} = state.weather;
        return {temperature}
    },
    {tempAsync}
)(Weather);

