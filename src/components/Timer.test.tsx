import {render,screen} from '@testing-library/react'
import Timer from './Timer'

test('render Timer component',()=>{
  const time = {
    seconds:0,
    minutes:0,
    hours:0
  }
  render(<Timer time={time} />)
  
  const divElements = screen.getAllByRole('div')
  const headingElements = screen.getAllByRole('heading')
  const spanElements = screen.getAllByRole('span')
  
  const secondsText = screen.getByText('Seconds')
  const minutesText = screen.getByText('Minutes')
  const hoursText = screen.getByText('Hours')
  
  expect(headingElements.length).toBe(3)
  expect(secondsText).toHaveTextContent('Seconds')
  expect(minutesText).toHaveTextContent('Minutes')
  expect(hoursText).toHaveTextContent('Hours')
  expect(divElements.length).toEqual(4)
  expect(spanElements.length).toBe(3)
})