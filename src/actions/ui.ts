import { Action, ReduxAction } from "../models/Action";
import { UIError } from "../models/UIError";

export const handleError = (err: Error) : ReduxAction => {
    return {
        type: Action.SHOW_ERROR,
        payload: {
            message: err.message,
            name: err.name
        } as UIError
    }
};

export const showLoader = () : ReduxAction => {
    return {
        type: Action.LOADING,
        payload: true
    }
};

export const hideLoader = () : ReduxAction => {
    return {
        type: Action.LOADING,
        payload: false
    }
};