import './reset.css';
import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const TODOS = [
    { id: 1, title: 'Finish react courses', isComplete: false },
    { id: 2, title: 'Go shopping for christmas gift', isComplete: true },
    { id: 3, title: 'Prepare the meals', isComplete: false },
  ]

  function addTodo(event) {
    event.preventDefault()

    if(todoInput.trim().length === 0) { 
      alert('String must not be empty') 
      return
    } 

    setTodos([...todos, {
      id: uuidv4(),
      title: todoInput,
      isComplete: false
    }])

    setTodoInput('')
  }

  function deleteTodo (id) {
    const filteredTodos = [...todos].filter(todo => todo.id !== id)
    setTodos(filteredTodos)
  }

  function handleInput(event) {
    setTodoInput(event.target.value)
  }

  const [todos, setTodos] = useState(TODOS)
  const [todoInput, setTodoInput] = useState('')

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <form action="#" onSubmit={ addTodo }>
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
            value={ todoInput }
            onChange={ handleInput }
          />
        </form>
        <ul className="todo-list">

        {
          todos.map((todo) => (
            <li className="todo-item-container" key={todo.id}>
              <div className="todo-item">
                <input type="checkbox" />
                <span className="todo-item-label">{ todo.title }</span>
                {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
              </div>
              <button className="x-button" onClick={ () => deleteTodo(todo.id) }>
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

          <span>3 items remaining</span>
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
      </div>
    </div>
  );
}

export default App;