import React from "react";
import {ReactComponent as Calendar} from '../../assets/svgs/calendar.svg'
import {ReactComponent as StopWatch} from '../../assets/svgs/stopwatch.svg';

export default function CommitDate(props) {

    const {commitDate, commitBuildTime} = props;

    const date = new Date(+commitDate * 1000);
    const day = date.toLocaleDateString('default', {day: 'numeric'})
    const month = date.toLocaleDateString('default', {month: 'long'}).slice(0, 3);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedDate = `${day} ${month}, ${hours}:${minutes}`;


    return (
        <div className="commit-date">
            <div className="commit-date--calendar">
                <Calendar/>
                <p className="secondary-text">{formattedDate}</p>
            </div>
            <div className="commit-date--build">
                <StopWatch/>
                <p className="secondary-text">{commitBuildTime}</p>
            </div>

        </div>
    )
}