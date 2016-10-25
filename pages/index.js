'use strict';

import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from '../reducers/index.js';

import Counter from '../components/counter.js';

export default class App extends React.Component {
    // This will only be rendered on the server;
    static async getInitialProps ({req}) {
        const state = {counter: 0};
        const store = createStore(reducer, state, applyMiddleware(thunkMiddleware));
        return {initialState: store.getState()};
    }

    constructor (props) {
        super(props);
        const store = createStore(reducer, this.initialState, composeWithDevTools(
            applyMiddleware(thunkMiddleware),
        ));
        if (typeof window !== 'undefined') {
            //  Running inside browser
            this.store = window.store === 'undefined'? window.store : store;
        } else {
            //  Running on server
            this.store = store;
        }
    }

    componentDidMount () {
        console.log('App is ready');
    }

    componentWillUnmount () {
        console.log('Good bye');
    }

    render () {
        return (
            <Provider store={this.store}>
                <Counter />
            </Provider>
        );
    }
}
