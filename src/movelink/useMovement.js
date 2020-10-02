import {useState, useEffect, useRef} from "react";

export default function useMovement () {
    let [x, setX] = useState(10);
    let [y, setY] = useState(10);
    let direction = useRef('right');

    useEffect(() => {
        const keyDown = (e) => {
            e.keyCode === 38 && move('up');
            e.keyCode === 40 && move('down');
            e.keyCode === 37 && move('left');
            e.keyCode === 39 && move('right');
        };

        window.addEventListener('keydown', keyDown);
        return () => {
            window.removeEventListener('keydown', keyDown);
        }
    }, []);


    const move = (dir) => {
        direction.current = dir;
        dir === 'up' && setY((y) => y - 10);
        dir === 'down' && setY((y) => y + 10);
        dir === 'left' && setX((x) => x - 10);
        dir === 'right' && setX((x) => x + 10);
    };

    return {x, y, direction, move};
};