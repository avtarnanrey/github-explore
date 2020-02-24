import * as React from "react";
import Logo from "../../GitHub_Logo.png";

export const Header: React.FC<any> = () => {
    return (
        <header className="main-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm">
                        <h1 className="d-flex justify-content-sm-start justify-content-center text-white d-flex align-items-end margin-0">
                            <img src={Logo} alt="GitHub" className="logo" />
                            <span className="pad-5-bottom">Explore</span>
                        </h1>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com/avtarnanrey/github-explore" rel="noopener noreferrer" target="_blank" className="btn btn-outline-light col-12 col-sm-auto d-sm-block float-sm-right">Github Repository</a>
                    </div>
                </div>
            </div>
        </header>
    );
};