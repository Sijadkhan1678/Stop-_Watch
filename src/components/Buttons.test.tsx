import React from 'react'
import {render,screen} from '@testing-library/react'
import Buttons from './Buttons'


test('render Buttons component',()=>{
  
  const startWatch = () => {}
  const stopWatch = () => {}
  const resetWatch = () => {}
 let isStart = false
 
  render(<Buttons
            startWatch={startWatch}
            stopWatch={stopWatch}
            resetWatch={resetWatch} 
            isStart={isStart}/>
            )
            
  const divElement = screen.getByRole('div')          
 const buttonElements = screen.getAllByRole('button') 
 
 expect(divElement).toBeInTheDocument()
 
 expect(buttonElements.length).toEqual(2)
 
})



