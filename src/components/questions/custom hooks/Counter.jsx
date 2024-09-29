import React from 'react'
import useCounter from './useCounter'

const Counter = () => {
    const [count , increment , decrement , reset] = useCounter();
   
  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
        
    </div>
  )
}

export default Counter