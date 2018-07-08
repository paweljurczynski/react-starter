import { Action } from "../models/Action";
import { UIError } from "../models/UIError";

function getInitialState () {
    return {
        errors: [],
        loading: false
    };
}

export default function (state = getInitialState(), action) {
    switch (action.type) {
        case Action.SHOW_ERROR: {
            return {
                ...state,
                errors: [...state.errors, action.payload as UIError]
            };
        }
        case Action.LOADING: {
            return {
                ...state,
                loading: action.payload
            };
        }
        default:
            return state;
    }
}