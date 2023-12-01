// An array of objects
// Each object will have a three keys
// Id, TaskName, Completion = boolean

import { useState, useReducer } from "react";
import ToDoListItem from "./ToDoListItem";


function ToDoList() {

    const initialState = [
        {
            id: 1,
            taskName: "Laundry",
            complete: false
        },
        {
            id: 2,
            taskName: "Groceries",
            complete: false
        },
        {
            id: 3,
            taskName: "Car Wash",
            complete: false
        },
        {
            id: 4,
            taskName: "Compass Work",
            complete: false
        },
    ]

    // const [todos, setTodos] = useState(initialState)
    const reducer = (state, action) => {
        // for the reducer, you would be using switch statement
        // Actions?
        // "COMPLETEITEM"
        if(action.type === "COMPLETEITEM"){
            const copyOfState = state.map((toDoItem)=> {
                console.log(toDoItem.id ,  action.id)
                if(toDoItem.id === action.id){
                    return {
                        ...toDoItem,
                        complete: true
                    }
                } else {
                    // In the event that we dont find it
                    //return the item unmodified
                    return  {
                        ...toDoItem,
                    };
                }
            })
            // We need a way to add item to our list, and remove items from our list
    
            // We need to go through all of the items, find the one that we clicked
            // And modify the complete key to true
    
            // setTodos(copyOfState)
            return copyOfState;

        }
        if(action.type === "ADDITEM"){
            const copyOfState = state.map((toDoItem)=> {
                console.log(toDoItem.id ,  action.id)
                if(toDoItem.id === action.id){
                    return {
                        ...toDoItem,
                        complete: true
                    }
                } else {
                    // In the event that we dont find it
                    //return the item unmodified
                    return  {
                        ...toDoItem,
                    };
                }
            })
            // We need a way to add item to our list, and remove items from our list
    
            // We need to go through all of the items, find the one that we clicked
            // And modify the complete key to true
    
            // setTodos(copyOfState)
            return copyOfState;

        }
        if(action.type === "DELETEITEM"){
            const copyOfState = state.map((toDoItem)=> {
                console.log(toDoItem.id ,  action.id)
                if(toDoItem.id === action.id){
                    return {
                        ...toDoItem,
                        complete: true
                    }
                } else {
                    // In the event that we dont find it
                    //return the item unmodified
                    return  {
                        ...toDoItem,
                    };
                }
            })
            // We need a way to add item to our list, and remove items from our list
    
            // We need to go through all of the items, find the one that we clicked
            // And modify the complete key to true
    
            // setTodos(copyOfState)
            return copyOfState;

        }
    }
// todos = state
    const [todos, dispatch] = useReducer(reducer, initialState);

    const completeTask = (id) => {
        // well which item are we completing?
        // const copyOfState = [...todos];
        // The way we can find that it through the id
        // const copyOfState = todos.map((toDoItem)=> {
        //     console.log(toDoItem.id ,  id)
        //     if(toDoItem.id === id){
        //         return {
        //             ...toDoItem,
        //             complete: true
        //         }
        //     } else {
        //         // In the event that we dont find it
        //         //return the item unmodified
        //         return  {
        //             ...toDoItem,
        //         };
        //     }
        // })
        // console.log(copyOfState)
        // // We need a way to add item to our list, and remove items from our list

        // // We need to go through all of the items, find the one that we clicked
        // // And modify the complete key to true

        // setTodos(copyOfState)
        dispatch({type: "COMPLETEITEM", id: id})
    }


    return ( 
        <ul>
            {todos.map((toDoItem) => <ToDoListItem toDoItem={toDoItem} completeTask={completeTask} />)}
        </ul>
     );
}

export default ToDoList;