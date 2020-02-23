import * as React from "react";
import { Bio } from "./Bio";
import { Card } from "./Card";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getData } from "../../store/Actions";
import { dataStrings } from "../../utils";
import { StoreState } from "../../models";

interface ComponentProps {
}

export const Result = (props: ComponentProps) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const errors = useSelector((state: StoreState) => state.errors);

    React.useEffect(() => {
        dispatch(getData(dataStrings(location.pathname)))
    }, [location.pathname]);

    return (
        <div className="container">
            <div className="row">
                {
                    Boolean(errors) ?
                        <div className="col col-12 text-center color-red">
                            <h4>Error Occureed!</h4>
                            <p>{errors?.message}</p>
                        </div> :
                        <>
                            <div className="col col-md-4 col-12">
                                <Bio />
                            </div>
                            <div className="col col-md-8 col-12">
                                <Card />
                            </div>
                        </>
                }
            </div>
        </div>
    );
};