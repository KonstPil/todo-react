import variants from './config';


const getComputersChoice = () => variants[Math.floor(Math.random() * variants.length)];

function doesPlayerWin(playersChoice, computersChoice){
    let playersIndex = variants.indexOf(playersChoice);
    let computersIndex = variants.indexOf(computersChoice);
    return playersIndex === computersIndex ? 0 : (playersIndex > computersIndex || playersIndex === 0 && computersIndex === (variants.length-1) ? 1 : -1);
}

export {doesPlayerWin, getComputersChoice};