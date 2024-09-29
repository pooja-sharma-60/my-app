import React, {useEffect, useState} from 'react'


const UseState = () => {

    const [count , setCount] = useState(0);

    useEffect(() => {
        console.log(`Count updated to : ${count}`);
        return () => {
            console.log(`Cleaning up after count : ${count}`);
        }
    },[count])

    function handleIncrement () {
        setCount((prevCount) => prevCount + 1);
    }

    function handleDecrement () {
        setCount((prevCount) => prevCount - 1);
    }

    function handleReset () {
        setCount(0);
    }


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default UseState