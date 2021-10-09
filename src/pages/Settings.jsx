import React from 'react'
import Header from '../partials/Header'
import SettingsForm from '../components/Form/SettingsForm'

export default function Settings() {
    return (
        <>
            <Header appPage={'settings'} />
            <div className="main-container settings">
                <h4><strong>Settings</strong></h4>
                <p className="secondary-text">Configure repository connection and synchronization settings.</p>
                <SettingsForm />
            </div>
        </>
    )
}
