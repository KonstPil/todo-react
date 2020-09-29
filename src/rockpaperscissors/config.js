import React from "react";
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';

let variants =  [{
        id: 1, 
        draw: <Rock/>,
        name: 'rock',
        loseTo: 2
    }, { 
        id: 2,
        draw: <Paper/>,
        name:'paper', 
        loseTo: 3
    }, {
        id: 3,
        draw: <Scissors/>,
        name:'scissors',
        loseTo: 1
    }
];

let statuses = {
    '0': {
        info: 'Draw',
        classes: ''
    },
    '1': {
        info: 'You won!',
        classes: 'win'
    },
    '-1': {
        info: 'Computer won!',
        classes: 'lose'
    }
};

export {variants, statuses};