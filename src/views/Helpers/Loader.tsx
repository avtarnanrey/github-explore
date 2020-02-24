import * as React from "react";
import { useSelector } from "react-redux";
import { StoreState, WidgetStatus } from "../../models";

export const Loader = () => {
    const widgetStatus = useSelector((state: StoreState) => state.widgetStatus);

    return (
        <div className={`loaderContainer ${widgetStatus === WidgetStatus.UPDATING ? "d-block" : "d-none"}`}>
            <div className="loader">
                <span className="spinner"></span>
                <span className="margin-15-left">Loading...</span>
            </div>
        </div>
    );
};