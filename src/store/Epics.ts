import { combineEpics, ofType } from "redux-observable";
import { concat, of } from "rxjs";
import { mergeMap } from "rxjs/operators";
import req from "../Client";
import { DataProps, ErrorResponse, PrimaryResponse, RepoResponse, WidgetStatus } from "../models";
import { generateEndPoint } from "../utils";
import * as Actions from "./Actions";

const {
    getData,
    setBio,
    getRepos,
    setRepos,
    setWidgetStatus,
    errorOccured
} = Actions;

interface APIResponse extends PrimaryResponse, ErrorResponse {
}

const getDataFromAPI = (action$: any) => action$.pipe(
    ofType(getData.toString()),
    mergeMap(({ payload }: ReduxActions.Action<DataProps>) => concat(
        of(setWidgetStatus(WidgetStatus.UPDATING)),
        req(generateEndPoint(payload)).pipe(mergeMap((response: APIResponse) => {
            if (response.message) {
                return [
                    errorOccured(response),
                    setWidgetStatus(WidgetStatus.ERROR_OCCURED)
                ]
            } else {
                return [
                    setBio(response),
                    getRepos(response),
                    errorOccured(null),
                    setWidgetStatus(WidgetStatus.RENDERED)
                ]
            }
        }
        ))
    ))
);

const getReposFromAPI = (action$: any) => action$.pipe(
    ofType(getRepos.toString()),
    mergeMap(({ payload }: ReduxActions.Action<PrimaryResponse>) =>
        req(payload.repos_url).pipe(mergeMap((response: Array<RepoResponse>) => [
            setRepos(response),
            setWidgetStatus(WidgetStatus.RENDERED)
        ]))
    )
);

export default combineEpics(
    getDataFromAPI,
    getReposFromAPI
);