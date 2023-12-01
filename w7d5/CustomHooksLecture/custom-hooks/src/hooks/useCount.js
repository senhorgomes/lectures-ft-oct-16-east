import { useState, useReducer } from 'react';

const useCount = () => {

        // useReducer takes in two arguements
        // State, and dispatch(function to pass in information)
        // A reduce function

        // Action will be an object, type, data
        const reducer = (state, action) => {
            if(action.type === "handleIncrease"){
                // modify or set our state
                return state += 1
            }
            if(action.type === "handleDecrease"){
                return state -= 1
            }
            if(action.type === "handleReset"){
                return state = 0
            }
            // const handleIncrease = () => {
        //     // setCount(count + 1)
        //     setCount((prev)=> prev + 1);
        // }
        // const handleDecrease = () => {
        //     setCount((prev)=> prev - 1)
        // }
        // const handleReset = () => {
        //     setCount(0)
        // }

        }

        // create a state to hold the amount of time this button is being called
        // const [count, setCount] = useState(0);
        // const [state, dispatch] = useReducer(reducer, initialState)
        const [count, dispatch] = useReducer(reducer, 0)
        // Have a handleClick function that increases the state up by one
        const handleIncrease = () => {
            // setCount(count + 1)
            // setCount((prev)=> prev + 1);
            dispatch({type:"handleIncrease"})
        }
        const handleDecrease = () => {
            // setCount((prev)=> prev - 1)
            dispatch({type:"handleDecrease"})
        }
        const handleReset = () => {
            // setCount(0)
            dispatch({type:"handleReset"})
        }
        // count
        // handleIncrease
        // handleDecrease
        // handleReset
    return {count, handleIncrease, handleDecrease, handleReset}
}

export default useCount;