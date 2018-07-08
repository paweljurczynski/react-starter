import React from 'react';
import { Search } from "./Search";
import { shallow } from "enzyme";

describe('RepositoryList', () => {
    let wrapper;
    let instance;

    const onSearchStub = jest.fn().mockImplementation(() => Promise.resolve([]));

    const shallowRepositoryList = () => {
        return shallow(
            <Search onSearch={onSearchStub}/>
        );
    };

    beforeEach(() => {
        wrapper = shallowRepositoryList();
        instance = wrapper.instance();
    });

    it('should render correctly', () => {
        expect(wrapper.length).toBe(1);
    });

    it('should run onSearch after onChange', done => {
        instance.onChange({ target: { value: 'o' }});
        instance.onChange({ target: { value: 'on' }});
        instance.onChange({ target: { value: 'one' }});

        /* Had to use real timer because lodash doesn’t use timers to schedule denounce and throttle */
        setTimeout(() => {
            expect(onSearchStub).toHaveBeenCalledWith('one');
            expect(onSearchStub).toHaveBeenCalledTimes(1);
            done();
        }, 300);
    })
});