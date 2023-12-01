import { useEffect } from 'react';
import useCount from "../hooks/useCount";

function Counter() {
    const {count, handleIncrease, handleDecrease, handleReset} = useCount()

    // // create a state to hold the amount of time this button is being called
    // const [count, setCount] = useState(0);
    // // Have a handleClick function that increases the state up by one
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
    return (
        <>
            <h1>You have clicked this button this amount of time: {count}</h1>
            <button onClick={()=> handleIncrease()}>Increase the counter!</button>
            <button onClick={()=> handleDecrease()}>Decrease the counter!</button>
            <button onClick={()=> handleReset()}>Reset the counter!</button>
        </> 
     );
}

export default Counter;