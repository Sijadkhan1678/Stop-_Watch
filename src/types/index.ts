
export type Time = {
  milliSeconds:number
  seconds: number
  minutes: number
  hours: number
}

export type TimerProps = {
  time: {
    milliSeconds:number
    seconds: number
    minutes: number
    hours: number
  }
}
export type ButtonsProps = {
  startWatch: ()=> void
  stopWatch: ()=> void
  resetWatch: ()=> void
  isStart: boolean
}