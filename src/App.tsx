import React,{FC,useState} from 'react';
import './App.css';
import Timer from './components/Timer'
import Buttons from './components/Buttons'
import {Time} from './types/index'

const App: FC = () => {
  const [time,setTime] = useState <Time> ({
      seconds: 0,
      minutes: 0,
      hours: 0,
    })
  const [ isStart,setIsStart ] = useState<boolean>(false)  
  
  const [interval,setInt] = useState < any > ()
  
  let { seconds , minutes , hours } = time
  
  const startWatch = () => {
    
    setIsStart(true)
    
    setInt(setInterval(()=> {
      if (seconds === 60) {
        minutes++
        seconds = 0
      }
      if (minutes === 60) {
        hours++
        minutes = 0
      }

     setTime({
        seconds: seconds++,
        minutes: minutes,
        hours: hours
      })

    }, 1000))
  }
  const stopWatch = () => {
    
    setIsStart(false)
    clearInterval(interval)
    
  }
  const resetWatch = () => {
    
    clearInterval(interval)
    
    setTime({
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