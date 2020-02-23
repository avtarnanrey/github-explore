import { DataProps, Endpoint, ButtonState } from "../models";
import { Observable, Observer } from "rxjs";

type EnumType = { [s: number]: string };

export function mapEnum(enumerable: EnumType, fn: Function): any[] {
    // get all the members of the enum
    let enumMembers: any[] = Object.keys(enumerable).map((key: any) => enumerable[key]);

    // now map through the enum values
    return enumMembers.map(m => fn(m));
}

export const generateEndPoint = (data: DataProps) => {
    return `${Endpoint}/${data.type === ButtonState.USER.toLowerCase() ? "users" : "orgs"}/${data.searchTerm}`
}

export function createObservableRequest(method: () => Promise<any>) {
    return Observable.create((observer: Observer<any>) => {
        method()
            .then(response => {
                observer.next(response);
            })
            .catch(error => {
                observer.error(error);
            })
            .then(() => {
                observer.complete();
            })
    })
}

export const dataStrings = (data: string): DataProps => {
    let pathArr: Array<string> = data.split("/");
    return {
        type: pathArr[1],
        searchTerm: pathArr[2]
    }
}

export const toTitleCase = (str: string) => {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}