import { useState } from 'react'
import Another from './components/Another'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div>
      { count }
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <Another title="Anthony" />
      <Another />
    </div>
  )
}

export default App
