import { useState } from 'react';

function TodoForm(props) {

    const [todoInput, setTodoInput] = useState('')

    function handleInput(event) {
      setTodoInput(event.target.value)
    }
  
    function handleSubmit(event) {
        event.preventDefault()

        if(todoInput.trim().length === 0) { 
          alert('String must not be empty') 
          return
        } 

        props.addTodo(todoInput)

        setTodoInput('')
    }


    return (
        <form action="#" onSubmit={ handleSubmit }>
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
            value={ todoInput }
            onChange={ handleInput }
          />
        </form>
    )
}

export default TodoForm