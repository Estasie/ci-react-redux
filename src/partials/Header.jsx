import React from "react";
import { useState} from 'react';
import Button from '../components/Button/Button';
import {ReactComponent as Settings} from '../assets/svgs/settings.svg';
import {ReactComponent as Run} from '../assets/svgs/play.svg';
import ModalForm from '../components/Form/ModalForm';

export default function Header(props) {
    const {appPage, repoData} = props;
    const [open, setOpen] = useState(false)

    switch (appPage) {
        case "start":
            return (
                <header className="header-container">
                    <h2 className="ci-server-header">School server</h2>
                    <Button buttonIcon={Settings} buttonClass={'button-icon--large'} buttonAction={'/settings'}
                            buttonValue={'Settings'} buttonType={'large'}/>
                </header>
            )
        case "settings":
            return (
                <header className="header-container">
                    <h2 className="ci-server-header">School server</h2>
                </header>
            )
        default:
            return (
                <header className="header-container">
                    <h2 className="build-history-header">{repoData}</h2>
                    <div className="header-buttons">
                        <Button buttonIcon={Settings} buttonClass={'button-icon--small'} buttonAction={'/settings'}
                                buttonType={'small'}/>

                        <Button buttonIcon={Run} buttonType={'large'} buttonValue={"Run build"}
                                buttonClass={'button-icon--large'} onClick={() => setOpen(true)}/>
                    </div>

                    <ModalForm isOpen={open}
                               onClose={() => setOpen(false)}/>
                </header>
            )
    }

}
