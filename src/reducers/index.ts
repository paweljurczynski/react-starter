import { combineReducers } from "redux";
import ui from './ui';
import github from './github';

export default combineReducers({
    ui,
    github
});