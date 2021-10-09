import React from 'react'

import { ReactComponent as Done } from '../../assets/svgs/done.svg'
import { ReactComponent as InProgress } from '../../assets/svgs/clock.svg'
import { ReactComponent as Failed } from '../../assets/svgs/fail.svg';
import { ReactComponent as User } from '../../assets/svgs/user.svg';
import { ReactComponent as CodeCommit } from '../../assets/svgs/code-commit.svg';
import { ReactComponent as Calendar } from '../../assets/svgs/calendar.svg'
import { ReactComponent as StopWatch } from '../../assets/svgs/stopwatch.svg';

export default function Card(props) {
    const { cardType, commitStatus, commitNumber, commitDescr, commitBranch, commitHash, commitAuthor, commitDate, buildTime } = props;
    let date = new Date(+commitDate * 1000);
    let day = date.toLocaleDateString('default', { day: 'numeric' })
    let month = date.toLocaleDateString('default', { month: 'long' }).slice(0, 3);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let formatedDate = `${day} ${month}, ${hours}:${minutes}`;

    if (cardType === 'commit') {
        return (
            <div className="card-commit">
                <div className="card-content">
                    {
                        {
                            'done': <Done width="24" height="24" />,
                            'in-progress': <InProgress width="24" height="24" />,
                            'failed': <Failed width="24" height="24" />

                        }[commitStatus]
                    }

                    <div className="commit-meta">
                        <div className="commit-meta--description">
                            <h3 className={{
                                'done': 'commit-numb--green',
                                'in-progress': 'commit-numb--yellow',
                                'failed': 'commit-numb--red'

                            }[commitStatus]}>{commitNumber}</h3>
                            <h4>{commitDescr}</h4>
                        </div>
                        <div className="commit-meta--info">
                            <div className="commit-meta--branch">
                                <CodeCommit />
                                <p className="reg-text">{commitBranch}</p>
                                <p className="secondary-text">{commitHash}</p>
                            </div>
                            <div className="commit-meta--user">
                                <User />
                                <p className="reg-text">{commitAuthor}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="commit-date">
                    <div className="commit-date--calendar">
                        <Calendar />
                        <p className="secondary-text">{formatedDate}</p>
                    </div>
                    <div className="commit-date--build">
                        <StopWatch />
                        <p className="secondary-text">{buildTime}</p>
                    </div>

                </div>

            </div>
        )
    }
    else {
        
    }

}
