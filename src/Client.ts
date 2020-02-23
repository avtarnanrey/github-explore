import { Observable } from "rxjs";
import { createObservableRequest } from './utils';

export default function req(url: string, data: any = {}, options?: RequestInit): Observable<any> {
    return createObservableRequest(() => new Promise((resolve, reject) => {
        fetch(url, {
            method: options && (options.method || "GET"),
            mode: options && (options.mode || "same-origin"),
            cache: options && (options.cache || "default"),
            credentials: options && (options.credentials || "include"),
            headers: (options && options.headers) ? { ...options.headers } : { "Content-Type": "application/json" },
            redirect: options && (options.redirect || "follow"),
            referrer: options && (options.referrer || "client"),
            ...(options && options.method && { body: JSON.stringify(data) }),
        }).then(response => {
            resolve(response.json())
        })
            .catch(err => {
                resolve({
                    "error": JSON.stringify(err)
                })
            })
    }))
}