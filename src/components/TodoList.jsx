import TodoItemsRemaining from "./TodoItemsRemaining"

function TodoList(props) {
    
    return (
        <>
        <ul className="todo-list">

        {
          props.todos.map((todo) => (
            <li className="todo-item-container" key={todo.id}>
              <div className="todo-item">
                <input type="checkbox" onChange={() => props.completeTodo(todo.id)} checked={todo.isComplete ? true : false} />

                { !todo.isEditing ? (
                <span 
                  className={`todo-item-label ${todo.isComplete ? 'line-through' : ''}`}
                  onDoubleClick={() => { props.markAsEditing(todo.id) }}
                >{ todo.title }</span>
                ) : 
                (<input type="text" 
                  className="todo-item-input" 
                  defaultValue={ todo.title } 
                  onBlur={(event) => props.updateTodo(todo.id, event)} 
                  onKeyDown={(event) => {
                    if(event.key === 'Enter') { props.updateTodo(todo.id, event) }
                    if(event.key === 'Escape') { !props.markAsEditing(todo.id) }
                  } 
                  }
                  autofocus />)
                }

                
                
              </div>
              <button className="x-button" onClick={ () => props.deleteTodo(todo.id) }>
                <svg
                  className="x-button-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))
        }
        </ul>


        <div className="check-all-container">
          <div>
            <div className="button">Check All</div>
          </div>

          <TodoItemsRemaining />
        </div>

        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button">Clear completed</button>
          </div>
        </div>
        </>
    )
}

export default TodoList