import React from 'react'
import { Link } from 'react-router-dom'

export default function Button(props) {
    const { buttonClass, buttonIcon, buttonAction, onClick, buttonValue, buttonType, disabledStatus } = props;
    const Icon = buttonIcon;
    if (buttonType === 'submit') {
        return (
            <input onClick={onClick} disabled={disabledStatus} className={disabledStatus ? "button-disabled" : buttonClass} type={buttonType} value={buttonValue} />
        )
    } else if (buttonType === 'large') {
        return (
            <Link to={buttonAction ? buttonAction : '#'} onClick={onClick} className={buttonClass}>
                <Icon alt={buttonAction} width="28" height="28" />
                <span className="reg-text">{buttonValue}</span>
            </Link>
        )
    }

    else if (buttonType === 'small') {
        return (
            <Link to={buttonAction} className={buttonClass}>
                <Icon alt={buttonAction} width="28" height="28" />
            </Link>
        )
    }
    else if (buttonType === "close-modal") {
        return (
            <button onClick={onClick} disabled={disabledStatus} className={disabledStatus ? "button-disabled" : buttonClass}>
                {buttonValue}
            </button>
        )
    }
    else {
        return (
            <Link to={buttonAction} disabled={disabledStatus} className={disabledStatus ? "button-disabled" : buttonClass}>
                {buttonValue}
            </Link>
        )
    }
}
