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
  
  expect(headingElements.length).toBe(3)
  expect(divElements.length).toEqual(4)
  expect(spanElements.length).toBe(3)
})