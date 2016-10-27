'use strict';

import React from 'react';
import {connect} from 'react-redux';
import Head from 'next/head';

import Weather from '../components/weather.js';

import {increment, decrement} from '../actions/counter.js';

const Counter = ({counter, increment, decrement}) => {
    return (
        <div>
            <Head>
                <title>Counter React.js with redux</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>Counter: {counter}</div>
            <button onClick={() => increment()}>INCREMENT</button>
            <button onClick={() => decrement()}>DECREMENT</button>
            <br /><br />
            <Weather />
        </div>
    );
};

export default connect(
    state => ({counter: state.counter}),
    {increment, decrement}
)(Counter);
