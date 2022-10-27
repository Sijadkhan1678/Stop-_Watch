
export type Time = {
  seconds: number
  minutes: number
  hours: number
}

export type TimerProps = {
  time: {
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