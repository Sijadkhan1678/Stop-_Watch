import React, { FC, useState } from 'react';
import './App.css';
import Timer from './components/Timer'
import Buttons from './components/Buttons'
import { Time } from './types/index'

const App: FC = () => {
  const [time, setTime] = useState<Time>({
    milliSeconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
  })
  const [isStart, setIsStart] = useState<boolean>(false)

  const [interval, setInt] = useState<any>()

  let { milliSeconds, seconds, minutes, hours } = time

  const startWatch = () => {

    setIsStart(true)

    setInt(setInterval(() => {
      if (milliSeconds === 100) {
        seconds++
        milliSeconds = 0

      }
      if (seconds === 60) {
        minutes++
        seconds = 0
      }
      if (minutes === 60) {
        hours++
        minutes = 0
      }

      setTime({
        milliSeconds: milliSeconds++,
        seconds: seconds,
        minutes: minutes,
        hours: hours
      })

    }, 10))
  }
  const stopWatch = () => {

    setIsStart(false)
    clearInterval(interval)

  }
  const resetWatch = () => {

    clearInterval(interval)

    setTime({
      milliSeconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,

    })
  }

  return (
    <div title='div'
      className='container'>

      <Timer time={time} />

      <Buttons
        startWatch={startWatch}
        stopWatch={stopWatch}
        resetWatch={resetWatch}
        isStart={isStart}
      />

    </div>
  );
}

export default App;