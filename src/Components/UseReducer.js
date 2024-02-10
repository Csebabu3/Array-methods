import React, { useReducer } from 'react'

function counterReducer(state, action){
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "Decrement":
            return { count: state.count - 1 }
        case "Reset":
            return { count: 0 };
        default:
            throw Error("Invalid action")
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 })
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "Decrement" })}>decrement</button>
            <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
        </div>
    )
}

export default UseReducer
