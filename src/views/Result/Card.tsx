import * as React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../models";

interface StatItem {
    icon: string;
    value: string | number;
}

export const Card = () => {
    const repos = useSelector((state: StoreState) => state.repos);

    let StatItem = (props: StatItem) => {
        const { value, icon } = props;
        return value ? <li className="list-group-item">
            <span className={`fa fa-${icon}`}></span>
            <span className="font-weight-bold pad-5-left">{value.toString()}</span>
        </li> : null;
    }

    let repoList = repos ? repos.map(repo =>
        <div key={repo.id} className="card-item">
            <div key={repo.id} className="card">
                <div className="card-header">
                    {repo.name}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{repo.description}</h5>
                    <ul className="list-group list-group-flush flex-row justify-content-between margin-15-top flex-wrap">
                        <StatItem icon={"code"} value={repo.language} />
                        <StatItem icon={"eye"} value={repo.watchers_count} />
                        <StatItem icon={"thumb-tack"} value={repo.forks_count} />
                        <StatItem icon={"star"} value={repo.stargazers_count} />
                    </ul>
                    <a href={repo.html_url} className="btn btn-primary margin-15-top" target="_blank">View on Github</a>
                </div>
            </div>
        </div>
    ) : null;

    return <div className="d-flex flex-wrap">{repoList}</div>;
};