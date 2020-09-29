import React from "react";
import {getElByNum} from "../helpers";

const Choice = ({id, cb}) =>{
    let choice = getElByNum(id);
    return (
        <button onClick={()=>cb()} className={choice.name}>
            {choice.draw}
        </button>
    );
}

export default Choice;