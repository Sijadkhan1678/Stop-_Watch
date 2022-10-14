import React from 'react';
import {render,screen} from '@testing-library/react'
import App from './App'

test('it render',()=>{
     render(<App />)
     const container = screen.getByText('Stop Watch')
     expect(container).toBeInTheDocument()
})