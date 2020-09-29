import React from "react";
import {getElByNum, getStatusByNum} from "../helpers";

export default function Result ({result}) {

  let {gameResult, playersChoiceNum, computersChoiceNum} = result;
  if(gameResult === null){
    return null;
  }
  let status = getStatusByNum(gameResult);
  let playersChoice = getElByNum(playersChoiceNum);
  let computersChoice = getElByNum(computersChoiceNum);
    return (
      <div className={'result-container'}>
        <div id="result" className={status.classes}>{status.info}</div>
        <div id={'result-blocks'}>
          <div className={'result-block'}>player - {playersChoice.name} {playersChoice.draw}</div>
          <div className={'result-block'}>computer - {computersChoice.name} {computersChoice.draw}</div>
        </div>
      </div>
    );
}