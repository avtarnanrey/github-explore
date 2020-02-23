import * as React from "react";

interface ComponentProps {
    height: number;
}

export const Spacer = (props: ComponentProps) => {
    const { height } = props;

    return (
        <span className="d-flex col-12" style={{ height: height }} aria-hidden={false}></span>
    );
};