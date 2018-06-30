import React from 'react';
import { Provider } from 'react-redux';
import styles from './App.css';
import { State } from "../../models/State";
import { Store } from "redux";

type Props = {
    store: Store<State>
};

export const App = (props: Props) => {
    return (
        <Provider store={props.store}>
            <h1 className={styles.header}>Hello World!</h1>
        </Provider>
    )
};