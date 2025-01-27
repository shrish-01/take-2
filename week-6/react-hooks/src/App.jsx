import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoComponent from './components/TodoComponent';

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <TodoComponent todos={todos} setTodos={setTodos} />
  )
}

export default App
