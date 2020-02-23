import * as React from "react";
import Logo from "../../GitHub_Logo.png";

interface ComponentProps {
}

export const Header: React.FC<any> = (props: ComponentProps) => {
    const { } = props;

    return (
        <header className="main-header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm">
                        <h1 className="text-left text-white d-flex align-items-end margin-0">
                            <img src={Logo} alt="GitHub" title="GitHub" className="logo" />
                            <span className="pad-5-bottom">Explore</span>
                        </h1>
                    </div>
                    <div className="col-sm">
                        <a href="#" target="_blank" className="btn btn-outline-light float-right">Github Repository</a>
                    </div>
                </div>
            </div>
        </header>
    );
};