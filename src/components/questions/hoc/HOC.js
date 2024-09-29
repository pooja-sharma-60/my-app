import React,{useState} from 'react'

const HOC = (WrappedComponent) => {
    return function HOC () {
        const [count , setCount] = useState(0);

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count-1)

    const reset = () => setCount(0)
  return (
    <WrappedComponent 
    count = {count}
    increment = {increment}
    decrement = {decrement}
    reset = {reset}
    />
  )
    }
}

export default HOC