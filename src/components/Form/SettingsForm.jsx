import React from "react";
import {useState, useCallback} from "react";
import {useHistory} from "react-router";
import Button from "../Button/Button";
import Input from "../Input/Input";

const inputs = [{
    inputId: "github-repository",
    inputLabel: "Github repository",
    importantField: true,
    inputType: "text",
    placeholder: "https://github.com/User/repo"
},
    {
        inputId: "build-command",
        inputLabel: "Build command",
        importantField: true,
        inputType: "text",
        placeholder: "Npm start & npm build"

    },
    {
        inputId: "main-branch",
        inputLabel: "Main branch",
        importantField: false,
        inputType: "text",
        placeholder: "main"

    },
    {
        inputId: "synchronize-period",
        inputLabel: "Synchronize every",
        importantField: false,
        inputType: "number",
        placeholder: "10"
    }
];


export default function SettingsForm(props) {
    const history = useHistory();
    const [state, setState] = useState({
            "github-repository": '',
            "main-branch": "",
            "build-command": '',
            "synchronize-period": "",
        }
    );

    const [errors, setErrors] = useState({});

    const [sending, setSending] = useState(false);
    // callback for input change -> reduces rerender to inputs amount (in our case only 4 re renders)
    const onChangeCallback = useCallback((evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }, [state, setState]);

    // form's submit button callback
    const onSubmitCallback = useCallback((e) => {
        e.preventDefault();

        const errors = {};
        Object.entries(state).forEach(([key, value]) => {
            if (!value) {
                errors[key] = true;
            }
        });

        setErrors(errors);
        if (Object.values(errors).some(Boolean)) {
            return;
        }
        localStorage.setItem("settings", JSON.stringify(state));

        setSending(true);
        setTimeout(() => {
            history.push("/")
        }, 2000)

    }, [state, history]);

    // input's clear button callback
    const onClearCallback = useCallback(e => {
        e.preventDefault();
        const id = e.currentTarget.id;
        setState({...state, [id]: ''})
    }, [state, setState]);


    return (
        <form action="#">
            <span
                className={Object.values(errors).some(Boolean) ? "reg-text attention" : "hidden"}>Fill out all inputs</span>
            {inputs.map(input => {
                return (
                    <Input inputType={input.inputType} inputValue={state[input.inputId]} inputState={state}
                           handleInputChange={onChangeCallback}
                           handleInputClear={onClearCallback}
                           inputId={input.inputId} inputPlaceholder={input.placeholder} inputLabel={input.inputLabel}
                           importantStatus={input.importantField}/>

                )
            })}
            <div className="buttons">
                <Button disabledStatus={sending} onClick={onSubmitCallback} buttonType={"submit"}
                        buttonClass={"button-action"} buttonValue={"Save"} buttonAction={"/build-history"}/>
                <Button disabledStatus={sending} buttonType={"cancel"} buttonAction={"/"} buttonClass={"button-control"}
                        buttonValue={"Cancel"}/>
            </div>
        </form>
    )
}
