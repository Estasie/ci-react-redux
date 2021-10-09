import { React, useCallback, useState} from 'react';
import Button from '../components/Button/Button';
import { ReactComponent as Settings } from '../assets/svgs/settings.svg';
import { ReactComponent as Run } from '../assets/svgs/play.svg';
import ModalForm from '../components/Form/ModalForm';

export default function Header(props) {
    const { appPage, repoData } = props;
    const [show, setShow] = useState(false);


    const handleShow = useCallback((e) => {
        e.preventDefault()
        show ? setShow(false) : setShow(true)
    }, [setShow, show]);

    const startPageContent = (
        <>
            <h2 className="ci-server-header">School server</h2>
            <Button buttonIcon={Settings} buttonClass={'button-icon--large'} buttonAction={'/settings'} buttonValue={'Settings'} buttonType={'large'} />
        </>
    );

    const settingsContent = (
        <h2 className="ci-server-header">School server</h2>
    );

    const buildHistoryContent = (
        <>
            <h2 className="build-history-header">{repoData}</h2>
            <div className="header-buttons">
                <Button buttonIcon={Settings} buttonClass={'button-icon--small'} buttonAction={'/settings'} buttonType={'small'} />
                <Button buttonIcon={Run} buttonClass={'button-icon--large'} buttonValue={'Run build'} onClick={handleShow} buttonType={'large'} />
            </div>
            <div className={show ? "modal-wrapper" : "hidden"}>
                <ModalForm handleShow={handleShow}/>
            </div>
        </>
    )

    if (appPage === 'start') {
        return (
            <header className="header-container">
                {startPageContent}
            </header>
        )
    }
    else if (appPage === 'settings') {
        return (
            <header className="header-container">
                {settingsContent}
            </header>
        )
    }
    else {
        return (
            <header className="header-container">
                {buildHistoryContent}
            </header>
        )
    }
}
