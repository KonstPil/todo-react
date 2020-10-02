import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {downloadImages} from './helpers';
import useMovement from "./useMovement";

export default function MoveLink() {
    let canvasRef = useRef(null);
    let images = useRef(null);
    let [loading, setLoading] = useState(true);
    let {x, y, direction, move} = useMovement();

    useEffect(()=>{
      async function loadImages() {
        images.current = await downloadImages();
        setLoading(false);
        let ctx = canvasRef.current.getContext("2d");
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
      }

      loadImages();
    }, []);

    useEffect(() => {
      if(loading){
        return;
      }
      let ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = "#FF0000";
      ctx.drawImage(images.current[direction.current], x, y);
    }, [x, y, loading, direction]);

    return (
        loading ? <div>Loading...</div> : (<div id="moveLink">
            <canvas ref={canvasRef}/>

            <div className="arrows">
                <button onClick={() => move('up')}>Up</button>
                <button onClick={() => move('left')}>Left</button>
                <button onClick={() => move('down')}>Down</button>
                <button onClick={() => move('right')}>Right</button>
            </div>
        </div>)
    );
}