import React, { useState, useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar'
import { MdPause, MdPlayArrow } from 'react-icons/md'

import './styles.css'

function Timer() {
  var percentage = 0;
 function TimerContage() {
   setInterval(() => {
     percentage = percentage + 1
   }, 1000)
 }
  
  return (
   <div className="container">   
    <h1 className="title">Pomodora</h1>
    <CircularProgressbar value={TimerContage()} text={`${percentage}%`} />; 
    <button className="button"></button>
  </div>
  );
}

export default Timer;
