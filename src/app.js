import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Pomodoro from "./pomodoro/pomodoro";
import MarkDown from './markdown/markdown';
import NavTab from "./navtabs/navtab";
import MoveLink from "./movelink/App"
import RockPaperScissors from "./rockpaperscissors/App";
import './style.css';

const ProjectsLinks = () =>{
    return (
        <div className={'container'}>
            <h1>All my projects</h1>
            <ul>
                <Link to='/pomodoro'>
                    <li>Pomodoro</li>
                </Link>
                <Link to='/markdown'>
                    <li>Markdown</li>
                </Link>
                <Link to='/navtab'>
                    <li>NavTab</li>
                </Link>
                <Link to='/rockpaperscissors'>
                    <li>RockPaperScissors</li>
                </Link>
                <Link to='/movelink'>
                    <li>MoveLink</li>
                </Link>
            </ul>
        </div>
    )
};


export default function App() {
    return (
        <Router>
                <Switch>
                    <Route path='/' exact component={ProjectsLinks}/>
                    <Route path='/pomodoro'  component={Pomodoro}/>
                    <Route path='/markdown' component={MarkDown}/>
                    <Route path='/navtab' component={NavTab}/>
                    <Route path='/rockpaperscissors' component={RockPaperScissors}/>
                    <Route path='/movelink' component={MoveLink}/>
                </Switch>
        </Router>
    );
}