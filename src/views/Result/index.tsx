import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { StoreState } from "../../models";
import { getData } from "../../store/Actions";
import { dataStrings } from "../../utils";
import { Bio } from "./Bio";
import { Card } from "./Card";

export const Result = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const errors = useSelector((state: StoreState) => state.errors);
    const searchData = dataStrings(location.pathname);

    React.useEffect(() => {
        dispatch(getData(searchData))
    }, [location.pathname]);

    return (
        <div className="container">
            <div className="row">
                <h2 className="w-100 text-center margin-30-bottom font-size-18">Result for <span className="font-italic color-secondary">{searchData.searchTerm}</span></h2>
            </div>
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