import React from 'react'
import ReactDOM from 'react-dom';
import {useState, useCallback} from 'react';
import {useHistory} from 'react-router';
import Input from "../Input/Input";
import Button from '../Button/Button';


export default function ModalForm(props) {
    const {onClose, isOpen} = props;
    const [state, setState] = useState({
        "commit-hash": '',
        "valid": true
    });
    const history = useHistory();
    const [sending, setSending] = useState(false);
    // callback for input change -> reduces rerender to input (in our case only 1 re render)
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
        if (state["commit-hash"].length > 1) {
            // Server request sending imitation :D
            setSending(true);
            setTimeout(() => {
                // redirect to ?settings? (we have no build page)
                history.push('/settings')
            }, 500)
        } else {
            setState({...state, "valid": false})
        }
    }, [state, history]);

    // input's clear button callback
    const handleClear = useCallback(e => {
        e.preventDefault();
        const id = e.currentTarget.id;
        setState({...state, [id]: ''})
    }, [state, setState]);
    if (!isOpen) return null;


    return ReactDOM.createPortal(
        <div className={"modal-wrapper"}>
            <form action="#" className="card-modal">
                <h3>New build</h3>
                <span className={state["valid"] ? "hidden" : "reg-text attention"}>Fill out input</span>
                <div className="form-item">
                    <label htmlFor="commit-hash" className={state["valid"] ? "reg-text" : "reg-text invalid-input"}>Enter
                        the commit hash which you want to build.</label>
                    <Input inputType={"text"} inputValue={state["commit-hash"]} inputState={state}
                           handleInputChange={handleChange}
                           handleInputClear={handleClear}
                           inputId={"commit-hash"} inputPlaceholder={"9c9f0b9"}/>
                </div>
                <div className="buttons-wrapper">
                    <Button buttonType={"submit"} disabledStatus={sending} onClick={handleClick}
                            buttonClass={"button-action"} buttonValue={"Save"}/>
                    <Button onClick={onClose} buttonValue={"Cancel"} buttonClass={"button-control"}
                            buttonType={"close-modal"}/>
                </div>
            </form>
        </div>,
        document.querySelector('#root'))


}
