import React, { Fragment, FC } from 'react';
import { TimerProps } from '../types/index'


const Timer: FC<TimerProps> = ({ time: { milliSeconds, seconds, minutes, hours
} }) => {

  return (
    <Fragment>
      <div role='div' className='timer-container'>
        <div role='div'>
          <h1>{hours > 9 ? hours : '0' + hours}</h1>
          <span role='span'>Hours </span>
        </div>
        <div role='div'>
          <h1>{minutes > 9 ? ': ' + minutes : ': 0' + minutes}</h1>
          <span role='span'> Minutes </span>
        </div>
        <div role='div'>
          <h1>{seconds > 9 ? ': ' + seconds : ': 0' + seconds}</h1>
          <span role='span'>Seconds</span>
        </div>
        <div role='div'>
          <h1>{milliSeconds > 9 ? ': ' + Number(milliSeconds.toString().slice(0, 2)) : ': 0' + milliSeconds}</h1>
          <span role='span'>Milli</span>
        </div>
      </div>
    </Fragment>
  );
}

export default Timer;