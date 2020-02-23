import { combineReducers } from "redux";
import { Action, handleActions } from "redux-actions";
import * as actions from "./Actions";
import { WidgetStatus } from "../models";

const {
    setWidgetStatus,
    setBio,
    setRepos,
    errorOccured
} = actions;

export default combineReducers({
    widgetStatus: handleActions<any>({
        [setWidgetStatus.toString()]: (state, action: Action<any>) => action.payload
    }, WidgetStatus.UPDATING),
    bio: handleActions<any>({
        [setBio.toString()]: (state, action: Action<any>) => action.payload
    }, null),
    repos: handleActions<any>({
        [setRepos.toString()]: (state, action: Action<any>) => action.payload
    }, null),
    errors: handleActions<any>({
        [errorOccured.toString()]: (state, action: Action<any>) => action.payload
    }, null)
})