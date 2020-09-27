import React, { useState } from 'react';
import InfoBoard from "./components/InfoBoard";
import './App.css';
import {doesPlayerWin, getComputersChoice} from './helpers';
import Game from './components/Game';
import Result from "./components/Result";

export default function App() {

  let initialState = {
      gameResult: null,
      playersChoice: null,
      computersChoice: null
  };

  let [result, setResult] = useState(initialState);

  const game = (playersChoice) => {
    let computersChoice = getComputersChoice();
    let result = doesPlayerWin(playersChoice, computersChoice);

    setResult(() => setResult({
      gameResult: result,
      playersChoice,
      computersChoice
    }));
  };

  return (
    <div className="app">
      <InfoBoard score={result.gameResult}/>
      <Game gameCb = {game}/>
      <Result result={result}/>
    </div>
  );
}
