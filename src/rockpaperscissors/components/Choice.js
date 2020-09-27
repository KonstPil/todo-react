import React from "react";

const Choice = ({drawComponent, classes, cb}) =>{
    return (
        <button onClick={()=>cb()} className={classes}>
            {drawComponent}
        </button>
    );
}

export default Choice;