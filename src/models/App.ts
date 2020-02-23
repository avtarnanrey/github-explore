export const Endpoint = "https://api.github.com";

/**
 * App Interfaces
 */

export interface DataProps {
    searchTerm: string;
    type: ButtonState | string;
}

export interface StoreState {
    widgetStatus: WidgetStatus;
    bio: PrimaryResponse;
    repos: Array<RepoResponse>;
    errors: ErrorResponse | null;
}

export interface PrimaryResponse {
    login: string;
    id: number;
    node_id: string;
    html_url: string;
    url: string;
    avatar_url: string;
    repos_url: string;
    type: string;
    following: number;
    followers: number;
    bio: string;
    name: string;
    blog: string;
    location: string;
    email: string | null;
    public_repos: number;
}

export interface RepoResponse {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    description: string;
    url: string;
    homepage: string;
    stargazers_count: number;
    watchers_count: number;
    forks_count: number;
    language: string;
}

export interface ErrorResponse {
    message: string;
    documentation_url: string;
}

/**
 * App Enums
 */

export enum ButtonState {
    USER = "User",
    COMPANY = "Company"
}

export enum WidgetStatus {
    INIT = 0,
    UPDATING = 1,
    RENDERED = 2,
    ERROR_OCCURED = 3
}