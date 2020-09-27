import React from "react";
import Rock from '../icons/Rock';
import Paper from '../icons/Paper';
import Scissors from '../icons/Scissors';
import doesPlayerWin from '../helpers';
import variants from '../config';
import Choice from "./Choice";

const Game = ()=>{
    const getVariant = () =>{
        return variants[Math.floor(Math.random() * variants.length)];
      };
    
      const game = (playersChoice) => {
        let computersChoice = getVariant();
    
        console.log(playersChoice, computersChoice, doesPlayerWin(playersChoice, computersChoice))
      };
    
    return (
        <div className="choices">
            <div>You</div>
            <div />
            <div>Computer</div>
        
            <div>
                <Choice drawComponent={<Rock/>} classes="rock" cb={game.bind(null, 'rock')}/>
                <Choice drawComponent={<Paper/>} classes="paper" cb={game.bind(null, 'paper')}/>
                <Choice drawComponent={<Scissors/>} classes="scissors" cb={game.bind(null, 'scissors')}/>
            </div>

            <div className="vs">vs</div>
            <div>
            <button className="computer-choice">?</button>
            </div>
        </div>
    );
}

export default Game;