import React,{FC,useState} from 'react';
import './App.css';
import Timer from './components/Timer'
import Buttons from './components/Buttons'
import {Time} from './types/index'

const App: FC = () => {
  let [time,setTime] = useState <Time> ({
      seconds: 0,
      minutes: 0,
      hours: 0,
      isStart: false
    })
  const [start,setStart] = useState <any> ()
  let {
    seconds,
    minutes,
    hours,
    isStart
  } = time
  const startWatch = () => {
    setStart(setInterval(()=> {
      if (seconds === 60) {
        minutes++
        seconds = 0
      }
      if (minutes === 60) {
        hours++
        minutes = 0
      }

      setTime({
        seconds: seconds++, minutes: minutes, hours: hours, isStart: true
      })

    },
      1000))
  }
  const stopWatch = () => {
    clearInterval(start)
    setTime({
      ...time, isStart: false
    })
  }
  const resetWatch = () => {
    clearInterval(start)
    setTime({
      seconds: 0,
      minutes: 0,
      hours: 0,
      isStart: false
    })
  }
  //console.log('seconds',seconds)
  return (
    <div title='div' className='container'>
      <Timer time={time} />
      <Buttons
            startWatch={startWatch}
            stopWatch={stopWatch}
            resetWatch={resetWatch} 
            isStart={isStart}/>
    </div>
  );
}

export default App;