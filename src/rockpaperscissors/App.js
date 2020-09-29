import React, { useState } from 'react';
import InfoBoard from "./components/InfoBoard";
import './App.css';
import {getResult, getComputersChoice} from './helpers';
import Game from './components/Game';
import Result from "./components/Result";

export default function App() {

  let initialState = {
      gameResult: null,
      playersChoice: null,
      computersChoice: null
  };

  let [userPoints,setUserPoints] = useState(0);
  let [computerPoints, setComputerPoints] = useState(0);
  let [game, setGame] = useState(initialState);

  const playGame = (playersChoiceNum) => {
    let computersChoiceNum = getComputersChoice();
    let result = getResult(playersChoiceNum, computersChoiceNum);

    if(result > 0){
      setUserPoints((userPoints)=> userPoints + 1);
    } else if (result < 0){
      setComputerPoints((computerPoints)=> computerPoints + 1);
    }
    
    setGame(() => {
      return {
      gameResult: result,
      playersChoiceNum,
      computersChoiceNum
    }});
  };

  return (
    <div className="app">
      <InfoBoard userPoints={userPoints} computerPoints={computerPoints}/>
      <Game gameCb = {playGame}/>
      <Result result={game}/>
    </div>
  );
}
