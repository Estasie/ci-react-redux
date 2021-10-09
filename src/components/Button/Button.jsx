import React from 'react'
import {Link} from 'react-router-dom'

export default function Button(props) {
    const {buttonClass, buttonIcon, buttonAction, onClick, buttonValue, buttonType, disabledStatus} = props;
    const Icon = buttonIcon;

    switch (buttonType) {
        case "submit":
            return (
                <input onClick={onClick} disabled={disabledStatus}
                       className={disabledStatus ? "button-disabled" : buttonClass} type={buttonType}
                       value={buttonValue}/>
            )
        case "small":
            return (
                <Link to={buttonAction} className={buttonClass}>
                    <Icon alt={buttonAction} width="28" height="28"/>
                </Link>
            )
        case "large":
            return (
                <Link to={buttonAction ? buttonAction : '#'} onClick={onClick} className={buttonClass}>
                    <Icon alt={buttonAction} width="28" height="28"/>
                    <span className="reg-text">{buttonValue}</span>
                </Link>
            )
        case "close-modal":
            return (
                <button onClick={onClick} disabled={disabledStatus}
                        className={disabledStatus ? "button-disabled" : buttonClass}>
                    {buttonValue}
                </button>
            )
        default:
            return (
                <Link to={buttonAction} disabled={disabledStatus}
                      className={disabledStatus ? "button-disabled" : buttonClass}>
                    {buttonValue}
                </Link>
            )

    }
}
