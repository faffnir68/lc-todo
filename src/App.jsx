import './reset.css';
import './App.css';
import { useState } from 'react';
import TodoItemsRemaining from './components/TodoItemsRemaining';
import NoTodos from './components/NoTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const TODOS = [
    { id: 1, title: 'Finish react courses', isComplete: false, isEditing: false },
    { id: 2, title: 'Go shopping for christmas gift', isComplete: true, isEditing: false },
    { id: 3, title: 'Prepare the meals', isComplete: false, isEditing: false },
  ]

  function addTodo(todo) {

    setTodos([...todos, {
      id: uuidv4(),
      title: todo,
      isComplete: false
    }])

  }

  function deleteTodo (id) {
    const filteredTodos = [...todos].filter(todo => todo.id !== id)
    setTodos(filteredTodos)
  }



  function completeTodo(id) {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) { todo.isComplete = !todo.isComplete }
      return todo
    })
    setTodos(updatedTodos)
  }

  function markAsEditing(id) {
    const editedTodos = todos.map(todo => {
      if(todo.id === id) { todo.isEditing = !todo.isEditing }
      return todo
    })
    setTodos(editedTodos)
  }

  function updateTodo(id, event) {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) { 
        if(event.target.value.trim().length === 0) { 
          alert('String must not be empty') 
          todo.isEditing = false
          return todo
        } 
        todo.title = event.target.value
        todo.isEditing = false
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  function remaining() {
    return todos.filter(todo => !todo.isComplete).length
  }

  const [todos, setTodos] = useState(TODOS)

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo} />

        {todos.length > 0 ? (
          <TodoList 
            todos={todos} 
            completeTodo={completeTodo}
            updateTodo={updateTodo}
            markAsEditing={markAsEditing}
            deleteTodo={deleteTodo}
          />
        ) : 
        (
          <NoTodos />
        )
        }
      </div>
    </div>
  );
}

export default App;