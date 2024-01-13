import React, { useContext } from 'react'
import { MyContext } from './MyProvider'

function CounterDisplay() {
    const {count} = useContext(MyContext)
  return (
    <div className='App'>
        <h1>This is Counter display component</h1>
        <h3>The current count is {count}</h3>
    </div>
  )
}

export default CounterDisplay