import React from "react";
import {useState, useCallback} from "react";
import {useHistory} from "react-router";
import Button from "../Button/Button";
import Input from "../Input/Input";
import NotFoundError from "../Error/NotFoundError";
import store from "../../store/store";

const inputs = [{
    inputId: "github-repository",
    inputLabel: "Github repository",
    importantField: true,
    inputType: "text",
    placeholder: "Enter repository name"
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
    const [settings, setSettings] = useState({
            "github-repository": '',
            "main-branch": "",
            "build-command": '',
            "synchronize-period": "",
        }
    );

    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState({status: false, repository: ""});
    const [sending, setSending] = useState(false);

    // callback for input change -> reduces rerender to inputs amount (in our case only 4 re renders)
    const onChangeCallback = useCallback((evt) => {
        const value = evt.target.value;
        setSettings({
            ...settings,
            [evt.target.name]: value
        });
    }, [settings, setSettings]);

    // form's submit button callback
    const onSubmitCallback = useCallback((e) => {
        e.preventDefault();

        const errors = {};
        Object.entries(settings).forEach(([key, value]) => {
            if (!value) {
                errors[key] = true;
            }

        });

        setErrors(errors);
        if (Object.values(errors).some(Boolean)) {
            return;
        }

        //Чтобы создать ошибку - раскомменть код ниже и закомменть 101 - 107 строки ^-^

        // let response = fetch('/api/fetch/post/githubdata', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify(settings)
        // });
        //
        // if(response.ok){
        //     history.push("/")
        //     localStorage.setItem("settings", JSON.stringify(settings));
        //     store.dispatch({type: "SET_SETTINGS", payload: settings})
        // } else {
        //     setServerError({status: "true", repository: `${settings["github-repository"]}`});
        // }


        localStorage.setItem("settings", JSON.stringify(settings));
        store.dispatch({type: "SET_SETTINGS", payload: settings})

        setSending(true);
        setTimeout(() => {
            history.push("/")
        }, 2000)

    }, [settings, history, serverError]);

    // input's clear button callback
    const onClearCallback = useCallback(e => {
        e.preventDefault();
        const id = e.currentTarget.id;
        setSettings({...settings, [id]: ''})
    }, [settings, setSettings]);


    return (
        <form action="#">
            <span
                className={Object.values(errors).some(Boolean) ? "reg-text attention" : "hidden"}>Fill out all inputs</span>

            <NotFoundError state={serverError} repository={serverError["repository"]}/>

            {inputs.map(input => {
                return (
                    <Input key={input.inputId} inputType={input.inputType} inputValue={settings[input.inputId]}
                           inputState={settings}
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
