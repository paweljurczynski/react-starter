export enum Action {
    FETCH_REPOSITORIES = 'FETCH_REPOSITORIES',
    SHOW_ERROR = 'SHOW_ERROR',
    LOADING = 'LOADING',
    UPDATE_PAGE_TITLE = 'UPDATE_PAGE_TITLE'
}

export type ReduxAction = {
    type: Action,
    payload: any
};
