import React from 'react'
import Settings from './assets/svgs/settings.svg';
import Play from './assets/svgs/play.svg';
import Delete from './assets/svgs/clear.svg';
import Done from './assets/svgs/done.svg';
import CodeCommit from './assets/svgs/code-commit.svg';
import User from './assets/svgs/user.svg';
import Calendar from './assets/svgs/calendar.svg';
import StopWatch from './assets/svgs/stopwatch.svg';

export default function DesignSystem() {
    const divStyle = {
        alignItems: 'center',
        gap: '10px',
    };
    return (
        <div className="container">
            <div className="buttons">
                <p>button.button-action, input.button-action</p>
                <a href="#" className="button-action">
                    Save
                </a>
                <input type="submit" className="button-action" value="Save" />
                <p>button.button-control , input.button-control</p>
                <a href="#" className="button-control">
                    Cancel
                </a>
                <input type="submit" className="button-control" value="Cancel" />
                <p>button cancel .button-modal</p>
                <a href="#" className="button-modal">Cancel</a>
                <p>button.button-disabled, input.button-disabled</p>
                <a href="#" className="button-disabled">
                    Save
                </a>
                <input type="submit" className="button-disabled" value="Save" />

                <p>button.button-icon--large settings</p>
                <a href="#" className="button-icon--large">
                    <img src={Settings} alt="settings" width="28" height="28" /> Settings
                </a>

                <p>button.button-icon--small settings</p>
                <a href="#" className="button-icon--small">
                    <img src={Settings} alt="settings" width="28" height="28" />
                </a>

                <p>button.button-icon--large run build</p>
                <a href="#" className="button-icon--large">

                    <img src={Play} alt="settings" width="28" height="28" /> Run build
                </a>
                <p>button.button-icon--small run build</p>
                <a href="#" className="button-icon--small">

                    <img src={Play} alt="settings" width="28" height="28" />
                </a>

            </div>
            <div className="typography">
                <h2>Header2</h2>
                <h3>Header3</h3>
                <h4>Header4</h4>
                <p className="reg-text">P reg-text</p>
                <p className="secondary-text">P secondary-text</p>
                <h2 className="ci-server-header">H2 ci-server-header</h2>
                <h2 className="build-history-header">H2 build-history-header</h2>
                <h3 className="commit-numb">#1234</h3>
            </div>
            <div className="inputs">
                <p>Input with delete button</p>
                <div className="input-wrapper">
                    <input type="text" className="text-input" name="text" id="text" placeholder="Placeholder" />

                    <img className="input-clear" src={Delete} alt="Delete" />

                </div>
                <p>Number input</p>
                <input type="text" className="numb-input" />
                <p>Number input example</p>
                <div className="flex" style={divStyle}> <p className="reg-text">Synchronize every</p>  <input type="text" className="numb-input" /> <p className="secondary-text-bright">minutes</p></div>
            </div>
            <div className="cards">
                <div className="card-modal">
                    <h3>New build</h3>
                    <p className="reg-text">Enter the commit hash which you want to build.</p>
                    <div className="input-wrapper--modal">
                        <input type="text" className="text-input" name="text" id="text" placeholder="Placeholder" />

                        <img className="input-clear" src={Delete} alt="Delete" />

                    </div>
                    <div className="buttons-wrapper">
                        <a href="#" className="button-action">
                            Run build
                        </a>
                        <a href="#" className="button-modal">Cancel</a>
                    </div>
                </div>
                <div className="card-commit">
                    <div className="card-content">
                        <img width="24" height="24" src={Done} alt="done" />

                        <div className="commit-meta">
                            <div className="commit-meta--description">
                                <h3 className="commit-numb">#1234</h3>
                                <h4>add documentation for postgres scaler</h4>
                            </div>
                            <div className="commit-meta--info">
                                <div className="commit-meta--branch">
                                    <img width="16" src={CodeCommit} alt="Code commit" />
                                    <p className="reg-text">master</p>
                                    <p className="secondary-text">9c9f0b9</p>
                                </div>
                                <div className="commit-meta--user">
                                    <img src={User} alt="user" />
                                    <p className="reg-text">Some User</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="commit-date">

                        <div className="commit-date--calendar">
                            <img width="16" src={Calendar} alt="Calendar" />
                            <p className="secondary-text">21 янв, 03:06</p>
                        </div>
                        <div className="commit-date--build">
                            <img width="16" src={StopWatch} alt="Time" />
                            <p className="secondary-text">1 ч 20 мин</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
