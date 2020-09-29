import {variants, statuses} from './config';


const getComputersChoice = () => Math.floor(Math.random() * variants.length) + 1;

function getResult(playersChoiceNum, computersChoiceNum){
    if(playersChoiceNum === computersChoiceNum){
        return 0;
    } else {
        let playersChoice = getElByNum(playersChoiceNum);
        return playersChoice.loseTo === computersChoiceNum ? -1 : 1;
    }
}

function getElByNum (num){
    return variants.find((el)=>{
        return el.id === num;
    })
}

const getStatusByNum = (num) =>{
    return statuses[num.toString()];
  }

export {getResult, getComputersChoice, getElByNum, getStatusByNum};