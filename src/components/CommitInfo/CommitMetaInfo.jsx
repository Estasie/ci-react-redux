import React from "react";

import {ReactComponent as CodeCommit} from "../../assets/svgs/code-commit.svg";
import {ReactComponent as User} from "../../assets/svgs/user.svg";

export default function CommitMetaInfo(props){

    const {commitNumber, commitHash, commitAuthor, commitStatus, commitBranch, commitDescr} = props;


    return(
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
                    <CodeCommit/>
                    <p className="reg-text">{commitBranch}</p>
                    <p className="secondary-text">{commitHash}</p>
                </div>
                <div className="commit-meta--user">
                    <User/>
                    <p className="reg-text">{commitAuthor}</p>
                </div>
            </div>

        </div>
    )
}