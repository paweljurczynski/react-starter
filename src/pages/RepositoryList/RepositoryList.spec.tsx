import React from 'react';
import { shallow } from "enzyme";
import { RepositoryList } from "./RepositoryList";
import { Loader } from "../../components/Loader/Loader";
import { Repository } from "../../models/Repository";
import { RepositoryTable } from "../../components/RepositoryTable/RepositoryTable";
import { Search } from "../../components/Search/Search";

const repositories: Repository[] = [
    { stargazers_count: 1, name: 'X', html_url: 'XYZ', owner: { avatar_url: 'XXX' }},
    { stargazers_count: 2, name: 'Y', html_url: 'XYZ', owner: { avatar_url: 'XXX' }},
    { stargazers_count: 3, name: 'X', html_url: 'XYZ', owner: { avatar_url: 'XXX' }}
] as Repository[];

describe('RepositoryList', () => {
    let wrapper;
    const fetchStub = jest.fn().mockImplementation(() => Promise.resolve([]));

    const shallowRepositoryList = (props?: {}) => {
        return shallow(
            <RepositoryList
                repositories={repositories}
                fetchRepositories={fetchStub}
                loading={false}
                { ...props }
            />
        );
    };

    beforeEach(() => {
        wrapper = shallowRepositoryList();

    });

    it('should render correctly', () => {
        expect(wrapper.length).toBe(1);
    });

    it('should run fetchRepositories after mounting', () => {
        expect(fetchStub).toHaveBeenCalled();
    });

    it('should display loader correctly', () => {
       expect(wrapper.find(Loader).length).toBe(0);

       wrapper = shallowRepositoryList({ loading: true });

       expect(wrapper.find(Loader).length).toBe(1);
    });

    it('should render table correctly', () => {
        expect(wrapper.find(RepositoryTable).length).toBe(1);
    });

    it('should pass correct arguments to RepositoryTable', () => {
        expect(wrapper.find(RepositoryTable).prop('repositories')).toEqual(repositories);
    });

    it('should pass correct arguments to Search', () => {
        expect(wrapper.find(Search).prop('onSearch')).toEqual(fetchStub);
    });
});