import React from 'react';
import Header from '../partials/Header';
import {ReactComponent as HomeLogo} from '../assets/svgs/start-logo.svg';
import Button from '../components/Button/Button.jsx';

export default function Home() {
    return (
        <>
            <Header appPage={'start'} />
            <div className="main-container home">
                <div className="home-wrapper">
                    <HomeLogo className="first-screen-logo"/>
                    <p className="reg-text">Configure repository connection
                        and synchronization settings</p>
                    <Button buttonType={"button"} buttonClass={"button-action"} buttonAction={'/settings'} buttonValue={"Open settings"} />
                </div>
            </div>
        </>
    )
}
