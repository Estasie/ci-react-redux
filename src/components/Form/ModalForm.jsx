import React from 'react'
import Button from '../Button/Button';
import { useState, useCallback} from 'react';
import { useHistory } from 'react-router';
import {ReactComponent as Delete} from '../../assets/svgs/clear.svg';

export default function ModalForm(props) {
    const {handleShow} = props;
    const [state, setState] = useState({
        "commit-hash": '',
        "valid": true
    });

    const history = useHistory();

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
        if (state["commit-hash"] !== "" && state["commit-hash"].length > 1) {
            // Server request sending immitation :D
            setSending(true);
            setTimeout(()=> {
                history.push('/settings')
            }, 500)
        }
        else { 
            setState({...state, "valid": false})
        }
    }, [state, setState]);
    
    // input's clear button callback
    const handleClear = useCallback(e => {
        e.preventDefault();
        const id = e.currentTarget.id;
        setState({...state, [id]: ''})
    }, [state, setState]);

    return (
        <form action="#" className="card-modal">
                    <h3>New build</h3>
                    <div className="form-item">
                        <label htmlFor="commit-hash" className="reg-text">Enter the commit hash which you want to build.</label>
                        <div className="input-wrapper">
                            <input type="text" value={state["commit-hash"]}
                                onBlur={handleChange} onChange={handleChange} className={state["valid"]?"text-input": "text-input invalid-input"} name={"commit-hash"} id={"commit-hash"} placeholder="Placeholder" />
                                {state["commit-hash"] && <Delete id={"commit-hash"} className={"input-clear"} onClick={handleClear} />}
                        </div>
                    </div>
                    <div className="buttons-wrapper">
                        <Button buttonType={"submit"} disabledStatus={sending} onClick={handleClick} buttonClass={"button-action"} buttonValue={"Save"} />
                        <Button onClick={handleShow} buttonValue={"Cancel"} buttonClass={"button-control"} buttonType={"close-modal"}/>
                    </div>
                </form>
    )
}
