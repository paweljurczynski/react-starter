import React from 'react';
import { Store } from "redux";
import { AppState } from "../../models/State";
import { App } from './App';
import { shallow } from "enzyme";

const AppStore: Store<AppState> = {
    getState: jest.fn(),
    dispatch: jest.fn(),
    replaceReducer: jest.fn(),
    subscribe: jest.fn()
};

describe('<App />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App  store={AppStore}/>);
    });

    it('should render correctly', () => {
        expect(wrapper.length).toBe(1);
    });
});