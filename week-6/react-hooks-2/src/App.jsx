import { useEffect, useMemo, useState } from 'react'
import axios from "axios";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [todos, setTodos] = useState([]);
  // const [todoId, setTodoId] = useState(1);
  // const [currentTodoBtn, setCurrentTodoBtn] = useState(1);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState();

  function handleOnClick() {
    setCount(count + 1);
  }

  let solution = useMemo(() => {
    let sumTillInput = 0;
    for(let i = 1; i <= input; i++) {
      sumTillInput += i;
    }
    return sumTillInput;
  }, [input]);


  // useEffect(() => {
  //   // fetch("http://localhost:3001/todos")
  //   //   .then((response) => response.json())
  //   //   .then((data) => setTodos(data.todos));
  //   /**---------------------------------------------------- */
  //   async function fetchData() {
  //     const response = await axios.get("http://localhost:3001/todos");
  //     setTodos(response.data.todos);
  //   }

  //   fetchData();
  //   /**---------------------------------------------------- */
  // }, []);

  // async function handleOnClick() {
  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await axios.get(`http://localhost:3001/todos/${todoId}`);
  //       setTodos([response.data.todo]);
  //     }
  
  //     fetchData();
  //   }, [todoId]);
  // }

  // async function handleOnClick() {
  //   console.log(todoId);
  //   const response = await axios.get(`http://localhost:3001/todos/${todoId}`);
  //   setTodos([response.data]);
  // }

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(`http://localhost:3001/todos/${currentTodoBtn}`);
  //     setTodos([response.data]);
  //   }

  //   fetchData();
  // }, [currentTodoBtn])

  return (
    <>
      {/* <input type="text" onChange={(e) => setTodoId(e.target.value)} value={todoId}/> */}
      {/* <button onClick={(e) => setCurrentTodoBtn(e.target.innerText)}>1</button>
      <button onClick={(e) => setCurrentTodoBtn(e.target.innerText)}>2</button>
      <button onClick={(e) => setCurrentTodoBtn(e.target.innerText)}>3</button>
      <button onClick={(e) => setCurrentTodoBtn(e.target.innerText)}>4</button>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
          </div>
        )
      })} */}

      <input type="number" onChange={(e) => setInput(e.target.value === "" ? "" : Number(e.target.value))} value={input}/>
      <div>Solution: {solution}</div>
      <button onClick={handleOnClick}>Counter {count}</button>
    </>
  )
}

export default App
