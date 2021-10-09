import React from "react"
import { useState, useCallback } from "react"
import { useHistory } from "react-router"
import Button from "../Button/Button"
import {ReactComponent as Delete} from '../../assets/svgs/clear.svg'
import ValidateForm from "../../helpers/ValidateForm"

const inputs = [{
    inputId: "github-repository",
    inputLabel: "Github repository",
    importantField: true,
    inputType: "text",
    placeholder: "https://github.com/User/repo"
}, {
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

}, {
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
        "build-command": '',
        "main-branch": "",
        "synchronize-period": "",
        "valid": true
    });

    const [sending, setSending] = useState(false);
    // callback for input change -> reduces rerender to inputs amount (in our case only 4 rerenders)
    const handleChange = useCallback((evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }, [state]);

    // form's submit button callback
    const handleClick = useCallback((e) => {
        e.preventDefault();

        let invalidFields = ValidateForm(state);

        if (invalidFields.length === 0) {
            let settings = state;

            localStorage.setItem("settings", JSON.stringify(settings));
            // Server request sending immitation :D
            setSending(true);
            setTimeout(()=> {
                history.push("/build-history")
            },2000)
        }
        else { 
            setState({...state, "valid": false})
        }
    });
    
    // input's clear button callback
    const handleClear = useCallback(e => {
        e.preventDefault();
        const id = e.currentTarget.id;
        setState({...state, [id]: ''})
    }, [state, setState]);

    const formInputClassName = useCallback((inputType, valid)=> {
         if(inputType=== "text" && valid){
            return('text-input')
        } else if (inputType === "text" && !valid){
            return('text-input invalid-input')
        } else if (inputType === 'number' && !valid){
            return('numb-input invalid-input')
        } else {
            return('numb-input ')
        }
    }, []);

    return (
        <form action="#">
            {inputs.map(input => {
                return (
                    <div className="form-item">
                        <label htmlFor={input.inputId} className={input.importantField ? "reg-text imp" : "reg-text"}>{input.inputLabel}</label>
                        <div className="input-wrapper">
                            <input key={input.inputId} type={input.inputType} value={state[input.inputId]} placeholder={input.placeholder}
                                onBlur={handleChange} onChange={handleChange} className={formInputClassName(input.inputType, state["valid"])} name={input.inputId} id={input.inputId} />
                                {state[input.inputId] && <Delete id={input.inputId} className={input.inputType === "text" ? "input-clear": "hidden"} onClick={handleClear} />}
                        </div>
                    </div>
                )
            })}
            <div className="buttons">
                <Button disabledStatus={sending} onClick={handleClick} buttonType={"submit"} buttonClass={"button-action"} buttonValue={"Save"} buttonAction={"/build-history"} />
                <Button disabledStatus={sending} buttonType={"cancel"} buttonAction={"/"} buttonClass={"button-control"} buttonValue={"Cancel"} />
            </div>
        </form>
    )
}
