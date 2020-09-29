import React from "react";
import {drawComponents} from "../config";

export default function Result ({result}) {

  let {gameResult, playersChoice, computersChoice} = result;

    const getStatus = () =>{
      if(gameResult !== null){
        return gameResult === 0 ? "Draw" : (gameResult === 1 ? "You won" : "Computer won");
      } else {
        return "";
      }
    }

    return (
      <div>
        <div>{getStatus()}</div>
        <div id='result-blocks'>
          <div className={'result-block'}>player - {playersChoice} {drawComponents[playersChoice]}</div>
          <div className={'result-block'}>computer - {computersChoice} {drawComponents[computersChoice]}</div>
        </div>
      </div>
    );
}