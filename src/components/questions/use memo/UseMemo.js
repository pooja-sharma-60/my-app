import React, { useMemo, useState } from 'react'



const UseMemo = () => {
    const [count , setCount] = useState(0);
    const [todos,setTodos] = useState([])
    // const ans = expCal(count)
    const ans = useMemo(() => expCal(count),[count])
    const increment = () => setCount(count + 1)
    const addTodo = () => setTodos([...todos,"New Todo"])

  return (
    <div>
        <h2>Use Memo Example</h2>
        <p>Count: {count}</p>
        <p>Expensive Calculation Result : {ans}</p>
        <button onClick={increment}>+</button>
        <h3>My Todos</h3>
        {todos.map((todo,index) => (
            <p key={index}>{todo}</p>
        ))}
        <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

const expCal = (num) => {
    console.log("Calculating...");
    for(let i = 0; i < 100000; i++){
        num += i;
    }
    return num;
}

export default UseMemo