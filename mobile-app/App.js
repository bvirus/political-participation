import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import { reducer } from './src/reducers';
import { CardView } from './src/CardView';


let store = createStore(reducer);

export default (props, children) => (
    <Provider store={store}>
        <CardView></CardView>
    </Provider>
);