'use strict';

import yw from 'weather-yahoo';

export const TEMPERATURE = 'TEMPERATURE';

const temperature = (value) => ({type: TEMPERATURE, temperature: value});

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

export const tempAsync = () => async dispatch => {
    setTimeout(async () => {
        const weather = await yw.getSimpleWeather('stockholm');
        console.log(weather);
        dispatch(temperature(getRandomArbitrary(10, 30)));
    }, 5000);
};
