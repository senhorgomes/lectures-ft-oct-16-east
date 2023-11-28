// import the state
import { useState } from 'react';

function Counter(props) {

    // Create a variable for it
    // const state = useState(0);
    // const [state, setState] = useState(0);

    // Utilize it

    // 1. A variable that allows us to fetch the value of state - getter
    // 2. A function that allows us to modify that value - setter
    // console.log("State: ",state)
    // const getter = state[0];
    // const setter = state[1];

    // We cant use jQuery
    // We have javascript at our disposal
    // let number = 0;
    const incrementNumber = ()=> {
        // state += 1; //Actually a huge NO NO.
        // setState(state + 1)
        // setCounterOne
        props.setState((prev)=>{
            // let newNumber = prev + 1;
            // console.log(newNumber)
            return prev + 1;
        })
        // Asynchronous
        // console.log(state) //=> This will log the previous state. Because setState isnt finished yet
    }
    return (
        <div>
            <h4 id="likes-count">{props.state}</h4>
            <button onClick={() => incrementNumber()} id="likes-btn">Click me!</button>
        </div> 
     );
}

export default Counter;