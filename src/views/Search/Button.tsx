import * as React from "react";

interface ComponentProps {
    className: string;
    text: string;
    selected: boolean;
    setSelected: Function;
}

export const Button = (props: ComponentProps) => {
    const { className, selected, text, setSelected } = props;

    return (
        <button
            onClick={() => setSelected(text)}
            name={"type"}
            className={`btn btn-${className} ${selected ? "selected" : ""}`}
            type="button"
        >{text}
        </button>
    );
};