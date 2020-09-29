import React from "react";

export default function InfoBoard ({userPoints, computerPoints}) {
    return (
        <div className="info">
            <h2>Rock. Paper. Scissors</h2>

            <div className="wins-losses">
            <div className="wins">
                <span className="number">{userPoints}</span>
                <span className="text">Wins</span>
            </div>

            <div className="losses">
                <span className="number">{computerPoints}</span>
                <span className="text">Losses</span>
            </div>
            </div>
        </div>
    )
}