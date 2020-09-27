import React from 'react';
import InfoBoard from "./components/InfoBoard";
import './App.css';
import Game from './components/Game';
import Result from "./components/Result";

export default function App() {
  return (
    <div className="app">
      <InfoBoard/>
      <Game/>
      <Result/>
    </div>
  );
}
