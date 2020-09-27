import React, { Fragment } from "react";

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
        <div>player - {playersChoice}</div>
        <div>computer - {computersChoice}</div>
      </div>
    );
}