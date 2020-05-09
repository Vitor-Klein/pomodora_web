import React, { useState, useRef } from 'react';
import { CircleProgress } from 'react-gradient-progress'
import { MdPause, MdPlayArrow } from 'react-icons/md'

import './styles.css'

function formatSeconds(seconds) {
  if (seconds < 60) {
    return `${seconds}`
  }
  return `${Math.floor(seconds / 60)}`
}

function Timer() {
  const timerRef = useRef()

  const [timerEnabled, setTimerEnabled] = useState(false)
  const [secondsEllapsed, setSecondsEllapsed] = useState(0)
  
  function toggleTimer() {

    if (timerEnabled) {
      clearInterval(timerRef.current)

      setTimerEnabled(false)
    } else {
      timerRef.current = setInterval(() => {
        setSecondsEllapsed(state => state + 1)
      }, 1)

      setTimerEnabled(true)
    }  
  }
  return (
   <div className="container">   
    <h1 className="title">Pomodora</h1>
    <CircleProgress 
      percentage={formatSeconds(secondsEllapsed)}
      primaryColor={['#bc1a94', '#bc1a94']} 
      secondaryColor={"#fff"}
      strokeWidth={20}
      width={350}
      fontColor={"#fff"}  
    />
    <button 
      className="button" 
      onClick={toggleTimer} 
      name={timerEnabled ? <MdPause /> : <MdPlayArrow />}
    />
  </div>
  );
}

export default Timer;
