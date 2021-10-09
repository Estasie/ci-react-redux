import React from 'react'
import CommitDate from "../CommitInfo/CommitDate";
import CommitMetaInfo from "../CommitInfo/CommitMetaInfo";

import {ReactComponent as Done} from '../../assets/svgs/done.svg'
import {ReactComponent as InProgress} from '../../assets/svgs/clock.svg'
import {ReactComponent as Failed} from '../../assets/svgs/fail.svg';

export default function Card(props) {
    const {commitStatus, commitNumber, commitDescr, commitBranch, commitHash, commitAuthor, commitDate, buildTime} = props;

    return (
        <div className="card-commit">
            <div className="card-content">
                {
                    {
                        'done': <Done width="24" height="24"/>,
                        'in-progress': <InProgress width="24" height="24"/>,
                        'failed': <Failed width="24" height="24"/>

                    }[commitStatus]
                }
                <CommitMetaInfo commitNumber={commitNumber} commitBranch={commitBranch} commitHash={commitHash}
                                commitAuthor={commitAuthor} commitStatus={commitStatus} commitDescr={commitDescr}/>
            </div>
            <CommitDate commitDate={commitDate} commitBuildTime={buildTime}/>

        </div>
    )


}
