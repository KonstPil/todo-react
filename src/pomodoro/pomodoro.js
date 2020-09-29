import React, {useState, useRef} from "react";

let data = {
    time: 25 * 60,
    resetPhrase: 'you can begin',
    stopPhrase: 'keep going',
};

const checkTime = (time) => {
    return time >= 10 ? time : ('0' + time);
};

export default function Pomodoro() {
    let initialTime = data.time;
    let [time, setTime] = useState(initialTime);
    let [timerIsGoing, setTimerIsGoing] = useState(false);
    const [canIClickBtn, setCanIClickBtn] = useState(true);
    let interval = useRef(null);

    const start = () => {
        if(interval.current !== null || !canIClickBtn){
            return;
        }

        let minus = setTime.bind(null, (time) => time - 1);
        minus();
        setTimerIsGoing(() => timerIsGoing = true);
        blockForDoubleClick();
        interval.current = setInterval(minus, 1000);
    };

    const blockForDoubleClick = () => {
        setCanIClickBtn(false);
        setTimeout(function () {
            setCanIClickBtn(true);
        }, 1000);
    };

    const stop = () => {
        clearInterval(interval.current);
        setTimerIsGoing(() => timerIsGoing = false);
        interval.current = null;
    };

    const reset = () => setTime(initialTime);
    const setRightPhrase = () => timerIsGoing ? data.stopPhrase : data.resetPhrase;
    let minutes = checkTime(Math.floor(time / 60));
    let seconds = checkTime(time - minutes * 60);

    return (
        <div style={{margin: '50px'}}>
            <p>{setRightPhrase()}</p>
            <p>{minutes}:{seconds}</p>
            <button onClick={timerIsGoing ? stop : start}>{timerIsGoing ? 'stop' : 'start'}</button>
            <button onClick={reset} disabled={timerIsGoing ? 'active' : ''}>reset</button>
        </div>
    );
}