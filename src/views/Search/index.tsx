import * as React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { ButtonState, DataProps } from "../../models";
import { Button } from "./Button";
import { mapEnum, dataStrings, toTitleCase } from "../../utils";

export const Search = () => {
    let history = useHistory();
    let { pathname } = useLocation();
    let paths = dataStrings(pathname);

    const [selected, setSelected] = React.useState(toTitleCase(paths.type) || ButtonState.USER);
    const { register, unregister, handleSubmit, setValue, errors } = useForm({ defaultValues: { type: selected }});

    React.useEffect(() => {
        register({ name: 'type' }, { required: true });
        
        return () => unregister('type');
      }, [register]);

    function handleSelection (value: any) {
        setValue("type", value);
        setSelected(value);
    }

    const onSubmit = (data: DataProps | any) => {
        history.push(`/${data.type.toLowerCase()}/${data.searchTerm}`);
    }

    return (
        <div className="container">
            <div className="row">
                <form className="col" onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            name="searchTerm"
                            defaultValue={paths?.searchTerm || ""}
                            ref={register({ required: true })}
                            placeholder={`${selected}'s name`}
                            aria-label={`${selected}'s name`}
                        />
                        <div className="input-group-append">
                            {
                                mapEnum(ButtonState, (item: string) =>
                                    <Button
                                        key={item}
                                        className="outline-secondary"
                                        text={item}
                                        selected={item === selected}
                                        setSelected={handleSelection}
                                    />
                                )
                            }
                            <input
                                type="submit"
                                className="btn btn-default font-weight-bold"
                                value={"Search"}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};