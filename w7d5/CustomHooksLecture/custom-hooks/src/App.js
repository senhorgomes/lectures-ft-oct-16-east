import './App.css';
import Counter from './component/Counter';
import ToDoList from './component/ToDoList';
import { useEffect } from 'react';
function App() {
// Rules for hooks:
  // Must be called in a React function/component
  // Must be called at the highest level, but not the top level. Just after the function declaration, and before the return
  // They must start with the word use

  // We wanted a global tracker of both or all counters

  // jQuery, when you needed something to occur after the document was loaded?
  // document.ready
  // Called useEffect
  // Allows us to execute code, right after the component is mounted
  // Two arguments, what do you want to execute(callback), a dependency array
 //Only execute one this component is mounted and rendered
 useEffect(()=> {
  console.log("Hey-o!")
  // API call, or fetching data
  // Set the information into a state
}, [])
  // three use cases
  // [] = execute one this component is mounted and rendered
  // [counter1, counter2] = listen to these variables, if any of them are modified, execute the callback
  // no array = when anything is changed, when the component is modified, state is modified
  return (
    <div className="App App-header">
      <Counter />
      <Counter />
      <ToDoList/>
    </div>
  );
}

export default App;
