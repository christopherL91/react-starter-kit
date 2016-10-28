'use strict';

import {test} from 'ava';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import {shallow, mount} from 'enzyme';

import Counter from '../components/counter.js';

import counterreducer from '../reducers/counter.js';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test.afterEach.always(t => {
    nock.cleanAll();
});

test('counter reducer', t => {
    const initialState = counterreducer(undefined, {});
    t.is(initialState, 0);
});
