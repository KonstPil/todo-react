import React from 'react';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import doesPlayerWin from './helpers';
import variants from './config';
import './App.css';

export default function App() {
  const getVariant = () =>{
    return variants[Math.floor(Math.random() * variants.length)];
  };

  const game = (playersChoice) => {
    let computersChoice = getVariant();

    console.log(playersChoice, computersChoice, doesPlayerWin(playersChoice, computersChoice))
  };

  return (
    <div className="app">
      {/* information goes here */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        {/* wins vs losses stats */}
        <div className="wins-losses">
          <div className="wins">
            <span className="number">0</span>
            <span className="text">Wins</span>
          </div>

          <div className="losses">
            <span className="number">0</span>
            <span className="text">Losses</span>
          </div>
        </div>
      </div>

      {/* the popup to show win/loss/draw */}
      {/* <div className="game-state win"></div> */}

      <div className="choices">
        {/* choices captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons for my choice */}
        <div>
          <button onClick={()=>game('rock')} className="rock">
            <Rock />
          </button>
          <button onClick={()=>game('paper')} className="paper">
            <Paper />
          </button>
          <button onClick={()=>game('scissors')} className="scissors">
            <Scissors />
          </button>
        </div>

        <div className="vs">vs</div>

        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
}
