import { useEffect, useState } from 'react'
import axios from "axios";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(0);

  useEffect(() => {
    // fetch("http://localhost:3001/todos")
    //   .then((response) => response.json())
    //   .then((data) => setTodos(data.todos));
    /**---------------------------------------------------- */
    async function fetchData() {
      const response = await axios.get("http://localhost:3001/todos");
      setTodos(response.data.todos);
    }

    fetchData();
    /**---------------------------------------------------- */
  }, []);

  // async function handleOnClick() {
  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await axios.get(`http://localhost:3001/todos/${todoId}`);
  //       setTodos([response.data.todo]);
  //     }
  
  //     fetchData();
  //   }, [todoId]);
  // }

  async function handleOnClick() {
    console.log(todoId);
    const response = await axios.get(`http://localhost:3001/todos/${todoId}`);
    setTodos([response.data]);
  }

  return (
    <>
      <input type="text" onChange={(e) => setTodoId(e.target.value)} value={todoId}/>;
      <button onClick={handleOnClick}>display todo!</button>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
          </div>
        )
      })}
    </>
  )
}

export default App
