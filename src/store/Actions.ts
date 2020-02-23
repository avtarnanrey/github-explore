import { createAction } from "redux-actions";
import { DataProps, PrimaryResponse, RepoResponse, ErrorResponse } from "../models";

export const setWidgetStatus = createAction<any>("SET_WIDGET_STATUS") as (status: any) => ReduxActions.Action<any>;
export const getData = createAction<DataProps>("GET_DATA") as (payload: DataProps) => ReduxActions.Action<DataProps>;
export const getRepos = createAction<PrimaryResponse>("GET_REPOS") as (payload: PrimaryResponse) => ReduxActions.Action<PrimaryResponse>;
export const setBio = createAction<PrimaryResponse>("SET_BIO") as (payload: PrimaryResponse) => ReduxActions.Action<PrimaryResponse>;
export const setRepos = createAction<Array<RepoResponse>>("SET_REPOS") as (payload: Array<RepoResponse>) => ReduxActions.Action<Array<RepoResponse>>;
export const errorOccured = createAction<ErrorResponse | null>("ERROR_OCCURED") as (payload: ErrorResponse | null) => ReduxActions.Action<ErrorResponse | null>;