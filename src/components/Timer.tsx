import React, {
  Fragment,
  FC
} from 'react';
import Buttons from './Buttons'
type TimerProps = {
  // seconds:number
  //minutes: number
  //hours:number
  time: {
    seconds: number,
    minutes: number,
    hours: number
  }
}
const Timer: FC <TimerProps> = ({
  time: {
    seconds, minutes, hours
  }}) => {

  return (
    <Fragment>
    <div role='div' className='timer-container'>
   <div role='div'>
      <h1>{hours > 9 ?  hours : ' 0'+ hours }</h1>
      <span role='span'>Hours </span>
    </div>
   <div role='div'>
      <h1>{minutes > 9 ? ': '+ minutes: ': 0'+ minutes}</h1>
      <span role='span'> Minutes </span>
    </div>
   <div role='div'>
      <h1>{seconds > 9 ? ': '+ seconds: ': 0 '+ seconds }</h1>
      <span role='span'>Seconds</span>
    </div>
    </div>
    </Fragment>
  );
}

export default Timer;