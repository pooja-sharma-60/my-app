import React from 'react'
import HOC from './HOC'

const Counter = ({count , increment , decrement , reset}) => {

  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
        
    </div>
  )
}

export default HOC(Counter);