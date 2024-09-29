import React, { useReducer } from 'react'

const counterReducer = (state , action) => {
    switch(action.type){
        case "INCREMENT" : return {count : state.count + 1};
        case "DECREMENT" : return {count : state.count - 1};
        case "RESET" : return {count : 0};
        default : return state;
    }
}

const UseReducer = () => {
    const [state , dispatch] = useReducer(counterReducer,{count:0})
  return (
    <div>
     <h1>use Reducer Example</h1>
     <p>{state.count}</p>
     <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
     <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
     <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
    </div>
  )
}

export default UseReducer