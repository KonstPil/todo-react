import React from "react";
import Rock from '../icons/Rock';
import Paper from '../icons/Paper';
import Scissors from '../icons/Scissors';
import Choice from "./Choice";

const Game = ({gameCb})=>{

    return (
        <div className="choices">
            <div>You</div>
            <div />
            <div>Computer</div>
        
            <div>
                <Choice drawComponent={<Rock/>} classes="rock" cb={gameCb.bind(null, 'rock')}/>
                <Choice drawComponent={<Paper/>} classes="paper" cb={gameCb.bind(null, 'paper')}/>
                <Choice drawComponent={<Scissors/>} classes="scissors" cb={gameCb.bind(null, 'scissors')}/>
            </div>

            <div className="vs">vs</div>
            <div>
            <button className="computer-choice">?</button>
            </div>
        </div>
    );
}

export default Game;