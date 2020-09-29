import React from "react";
import Choice from "./Choice";

const Game = ({gameCb})=>{

    return (
        <div className="choices">
            <div>You</div>
            <div />
            <div>Computer</div>
        
            <div>
                <Choice classes="rock" cb={gameCb.bind(null, 'rock')}/>
                <Choice classes="paper" cb={gameCb.bind(null, 'paper')}/>
                <Choice classes="scissors" cb={gameCb.bind(null, 'scissors')}/>
            </div>

            <div className="vs">vs</div>
            <div>
            <button className="computer-choice">?</button>
            </div>
        </div>
    );
}

export default Game;