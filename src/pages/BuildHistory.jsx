import React from 'react'
import Header from '../partials/Header'
import data from '../data/data.json'
import Card from '../components/Card/Card';

export default function BuildHistory() {
    return (
        <>
            <Header repoData={"philip1967/my-awesome-repo-with-long-long-long-repo-name"} appPage={'build-history'} />
            <div className="container build">
                {
                    data.data.map(item => {
                        return(
                            <Card cardType={'commit'} key={item.hash} commitStatus={item.status} buildTime={item.buildtime} commitNumber={item.number} commitDescr={item.descr} commitBranch={item.branch} commitHash={item.hash} commitAuthor={item.author} commitDate={item.date}/>
                        )
                    })
                }
            </div>
        </>
    )
}
