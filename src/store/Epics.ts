import { combineEpics, ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import { concat, of } from "rxjs"
import req from "../Client";
import * as Actions from "./Actions";
import { DataProps, WidgetStatus, PrimaryResponse, RepoResponse, ErrorResponse } from "../models";
import { generateEndPoint } from "../utils";

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
                    errorOccured(response)
                ]
            } else {
                return [
                    setBio(response),
                    getRepos(response)
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
            setRepos(response)
        ]))
    )
);

export default combineEpics(
    getDataFromAPI,
    getReposFromAPI
);