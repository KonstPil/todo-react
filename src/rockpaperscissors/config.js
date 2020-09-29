import React from "react";
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';

let variants =  ['rock', 'paper', 'scissors'];

let drawComponents = {
    'rock': <Rock/>,
    'paper': <Paper/>,
    'scissors': <Scissors/>
}

export {variants, drawComponents};