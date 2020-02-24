import * as React from "react";
import { Spacer } from "../Helpers";

export const Footer: React.FC<any> = () => {
    return (
        <footer className="main-footer">
            <Spacer height={30} />
            <div className="container">
                <span className="spacer-2 bg-default d-flex" aria-hidden="true"></span>
                <div className="row align-items-center">
                    <div className="col-sm">
                        <p className="m-0">Copyright</p>
                    </div>
                    <div className="col-sm">
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="btn btn-link col-12 col-sm-auto d-sm-block float-sm-right">Footer link</a>
                    </div>
                </div>
            </div>
            <Spacer height={15} />
        </footer>
    );
};