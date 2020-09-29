import React from "react";
import Choice from "./Choice";

const Game = ({gameCb})=>{

    return (
        <div className="choices">
            <div>You</div>
            <div />
            <div>Computer</div>
        
            <div>
                <Choice id={1} cb={gameCb.bind(null, 1)}/>
                <Choice id={2} cb={gameCb.bind(null, 2)}/>
                <Choice id={3} cb={gameCb.bind(null, 3)}/>
            </div>

            <div className="vs">vs</div>
            <div>
            <button className="computer-choice">?</button>
            </div>
        </div>
    );
}

export default Game;