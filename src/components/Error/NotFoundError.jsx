import React from "react";

export default function NotFoundError(props) {
    const {repository, state} = props
    return (
        <div className={state["status"] ? "error-card" : "hidden"}>
            <div className={"error-card--face"}>
                <div className="face">
                    <div className="eye"></div>
                    <div className="eye right"></div>
                    <div className="mouth sad"></div>
                </div>
                <div className="shadow move"></div>
            </div>

            <p className={"reg-text attention"}>Repository {repository} does not exist :(</p>

        </div>
    )
}