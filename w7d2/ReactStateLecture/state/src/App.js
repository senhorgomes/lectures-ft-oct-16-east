import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
function App() {

  // const [counterOne, setCounterOne] = useState(0);
  // const [counterTwo, setCounterTwo] = useState(0);
  const [counterObject, setCounterObject] = useState({
    counterOne: 0,
    counterTwo: 0
  })
  const incrementCounter = () => {
    // set the counter object
    setCounterObject((prev)=> {

      return {
        ...prev,
        counterOne: prev.counterOne + 1
      }
    })
  }
  // const title = "Hello World!";
  // const title2 = "Hey Class!";
  // What if, we wanted to have a total of BOTH counters?
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h4 id="likes-count">{counterObject.counterOne}</h4>
          <button onClick={() => incrementCounter()} id="likes-btn">Click me!</button>
        </div>


        {/* <Counter state={counterOne} setState={setCounterOne}/>
        <Counter state={counterTwo} setState={setCounterTwo}/> */}
        {/* <Counter/> */}
        {/* Header, and we can pass in a title */}
        {/* <Header 
          titleForHeader={`Amount of times both buttons have been clicked: ${counterOne + counterTwo}`}
        /> */}
      </header>
    </div>
  );
}

export default App;
