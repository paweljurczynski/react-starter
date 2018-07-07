import { GITHUB_API } from "../constants";
import { Action, ReduxAction } from "../models/Action";
import { handleError, hideLoader, showLoader } from "./ui";
import { SearchResponse } from "../models/SearchResponse";
import { Repository } from "../models/Repository";
import moment from 'moment';

export const fetchRepositories = (searchValue: string) => {
    const monthAgo = moment().subtract(1, 'month').format('YYYY-MM-DD');
    const preparedSearchValue = searchValue ? `${searchValue}+`: '';
    const searchParams = `q=${preparedSearchValue}created:>${monthAgo}&sort=stars`;

    return async dispatch => {
        dispatch(showLoader());

        try {
            const response: Response = await fetch(`${GITHUB_API}/search/repositories?${searchParams}`,);
            const searchResponse: SearchResponse<Repository> = await response.json();

            dispatch(hideLoader());
            dispatch(receiveRepositories(searchResponse.items));
        }
        catch (err) {
            dispatch(hideLoader());
            dispatch(handleError(err));
        }
    }
};


export const receiveRepositories = (repositories: Repository[]) : ReduxAction => {
    return {
        type: Action.FETCH_REPOSITORIES,
        payload: repositories
    }
};