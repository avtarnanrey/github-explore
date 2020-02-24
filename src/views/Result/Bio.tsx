import * as React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../models";

interface ComponentProps {
}

export const Bio = () => {
    const bio = useSelector((state: StoreState) => state.bio);

    return bio ?
        <div className="card">
            <img className="card-img-top" src={bio.avatar_url} alt={bio.name} />
            <div className="card-body">
                <div className="card-text table-responsive">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="row">{bio.type}</th>
                                <td>{bio.name}</td>
                            </tr>
                            <tr>
                                <th scope="row">Location</th>
                                <td>{bio.location}</td>
                            </tr>
                            <tr>
                                <th scope="row">Repos</th>
                                <td>{bio.public_repos}</td>
                            </tr>
                            <tr>
                                <th scope="row">Follwers</th>
                                <td>{bio.followers}</td>
                            </tr>
                            <tr>
                                <th scope="row">Following</th>
                                <td>{bio.following}</td>
                            </tr>
                            <tr>
                                <th scope="row">Bio</th>
                                <td>{bio.bio}</td>
                            </tr>
                            <tr>
                                <th scope="row">Blog</th>
                                <td>{bio.blog}</td>
                            </tr>
                            <tr>
                                <th scope="row">Github Link</th>
                                <td>{bio.html_url}</td>
                            </tr>
                            <tr>
                                <th scope="row">Blog</th>
                                <td>{bio.blog}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        : null;
};