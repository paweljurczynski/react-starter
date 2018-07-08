import { Action } from "../models/Action";
import { Repository } from "../models/Repository";

function getInitialState () {
    return {
        repositories: []
    };
}

export default function (state = getInitialState(), action) {
    switch (action.type) {
        case Action.FETCH_REPOSITORIES: {
            return {
                ...state,
                repositories: action.payload as Repository[]
            }
        }
        default:
            return state;
    }
}