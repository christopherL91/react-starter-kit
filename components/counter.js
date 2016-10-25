'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {increment, decrement} from '../actions/counter.js';

const Counter = ({counter, increment, decrement}) => {
    return (
        <div>
            <div>Counter: {counter}</div>
            <button onClick={() => increment()}>INCREMENT</button>
            <button onClick={() => decrement()}>DECREMENT</button>
        </div>
    );
};

export default connect(
    state => ({counter: state.counter}),
    {increment, decrement}
)(Counter);
