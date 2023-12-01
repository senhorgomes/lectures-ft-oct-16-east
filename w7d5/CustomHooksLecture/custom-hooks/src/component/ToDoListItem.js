function ToDoListItem({toDoItem, completeTask}) {
    return ( 
        <li key={toDoItem.id}>
            <input
                type="checkbox"
                checked={toDoItem.complete}
                onChange={()=>completeTask(toDoItem.id)}
            />
            {toDoItem.taskName}
        </li>
     );
}

export default ToDoListItem;