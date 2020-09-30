import React, { useEffect, useRef, useState } from 'react';
import './App.css';

export default function MoveLink() {
  let canvasRef = useRef();
  let [x, setX] = useState(10);
  let [y, setY] = useState(20);
  let [direction, setDirection] = useState('right');

  useEffect(()=>{
    let ctx = canvasRef.current.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    const keyDown = (e) => {
      switch(e.keyCode){
        case 38:
          up();
          break
        case 40:
          down();
          break
        case 37:
          left();
          break
        case 39:
          right();
          break
        default:
          break
      }
    };

    window.addEventListener('keydown', keyDown);
    return () => {
        window.removeEventListener('keydown', keyDown); 
    }
  }, [])

  useEffect(()=>{
    let ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "#FF0000";

    ctx.fillRect(x, y, 50, 50);
  }, [x, y]);

  const up = () => setY((y)=>y-10);

  const down = () => setY((y)=>y+10);

  const left = () => setX((x)=>x-10);

  const right = () => setX((x)=>x+10);

  return (
    <div id="moveLink">
      <canvas ref={canvasRef}/>

      <div className="arrows">
        <button onClick={up}>Up</button>
        <button onClick={left}>Left</button>
        <button onClick={down}>Down</button>
        <button onClick={right}>Right</button>
      </div>

      <div className="images">
        <img src="https://i.imgur.com/JYUB0m3.png" alt="Down" />
        <img src="https://i.imgur.com/GEXD7bk.gif" alt="Right" />
        <img src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
        <img src="https://i.imgur.com/4LGAZ8t.gif" alt="Left" />
      </div>
    </div>
  );
}
