import React from 'react'
import { useState } from 'react';
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const handleIncrease = (value) => {
    return(
      setCount(count + 1)
      
    )
  }

  const handleDecrease = () => {
    return(
      setCount(count - 1)
      
    )
  }

  const handleReset = () => {
    return (
      setCount(0)
    )
  }
  return (
    <div className='container'>
      <h1>{count}</h1>
      <button className='btn'  onClick={handleIncrease}>Increament</button>
      <button className='btn'  onClick={handleDecrease}>Decreament</button>
      <button className='btn'  onClick={handleReset}>Reset</button>
    </div>  )
}

export default App
