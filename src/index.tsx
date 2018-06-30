import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';

import { App } from "./pages/App/App";
import reducers from './reducers'
import './global.css';
import { State } from "./models/State";

const reduxTools = window['__REDUX_DEVTOOLS_EXTENSION__'];
const store: Store<State>  = createStore(reducers, reduxTools ? reduxTools() : {}, applyMiddleware(thunk));

render(<App store={store}/>, document.getElementById('root'));
