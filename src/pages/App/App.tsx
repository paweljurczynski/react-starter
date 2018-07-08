import React from 'react';
import { Provider } from 'react-redux';
import { AppState } from "../../models/State";
import { Store } from "redux";
import RepositoryList from "../RepositoryList/RepositoryList";

type Props = {
    store: Store<AppState>
};

export const App = (props: Props) => {
    return (
        <Provider store={props.store}>
            <main className="container">
                <RepositoryList/>
            </main>
        </Provider>
    )
};