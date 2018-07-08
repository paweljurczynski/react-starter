import { Repository } from "../models/Repository";
import { GITHUB_API } from "../constants";
import { fetchRepositories } from "./github";

const repositories = [
    { id: 1 },
    { id: 2 },
] as Repository[];

describe('Github reducers', () => {
    let dispatch;

    beforeEach(() => {
        dispatch = jest.fn();

        Date.now = jest.fn().mockImplementation(() => 1531066916682);

        window.fetch = jest.fn().mockImplementation(() => ({
            json: () => Promise.resolve({ items: repositories})
        }));
    });

    afterEach(jest.clearAllMocks);

    it('should invoke fetch without query by default', () => {
        const expectedURL = `${GITHUB_API}/search/repositories?q=created:>2018-06-08&sort=stars`;

        fetchRepositories()(dispatch);

        expect(window.fetch).toHaveBeenCalledWith(expectedURL);
    });

    it('should invoke fetch with searchValue passed as argument', () => {
        const searchValue = 'awesome';
        const expectedURL = `${GITHUB_API}/search/repositories?q=${searchValue}+created:>2018-06-08&sort=stars`;

        fetchRepositories(searchValue)(dispatch);

        expect(window.fetch).toHaveBeenCalledWith(expectedURL);
    });
});