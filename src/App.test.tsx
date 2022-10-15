import React from 'react';
import {render,screen} from '@testing-library/react'
import App from './App'

test('render App component',()=>{
     render(<App />)
     const divElement = screen.getByTitle('div')
     expect(divElement).toBeInTheDocument()
})
