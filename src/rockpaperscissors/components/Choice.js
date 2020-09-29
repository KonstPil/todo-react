import React from "react";
import {drawComponents} from "../config";

const Choice = ({classes, cb}) =>{
    console.log(drawComponents);
    return (
        <button onClick={()=>cb()} className={classes}>
            {drawComponents[classes]}
        </button>
    );
}

export default Choice;