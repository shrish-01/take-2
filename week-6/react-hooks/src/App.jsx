import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import TodoComponent from './components/TodoComponent';
// import Todo from './components/Todo';

function App() {

  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');

  // const [todos, setTodos] = useState([{
  //   id: 1,
  //   title: 'Learn React',
  //   description: 'Learn React and its hooks'
  // }, {
  //   id: 2,
  //   title: 'Learn Vite',
  //   description: 'Learn Vite and its features'
  // }, {
  //   id: 3,
  //   title: 'Build a project',
  //   description: 'Build a project using'
  // }]);

  // function handleClick(e) {
  //   e.preventDefault();
  //   if(title.trim() !== '' && description.trim() !== '') {
  //     setTodos([...todos, {id: todos.length + 1, title, description}]);
  //     setTitle('');
  //     setDescription('');
  //   }
  // }

  return (
    // <TodoComponent todos={todos} setTodos={setTodos} />
    // <div>
    //   <label htmlFor="name">Name: </label>
    //   <input 
    //     type="text" 
    //     name="name" 
    //     id="name" 
    //     onChange={(e) => setTitle(e.target.value)} 
    //     value={title}
    //   />
    //   <hr />
    //   <label htmlFor="description">Description: </label>
    //   <input 
    //     type="text" 
    //     name="description" 
    //     id="description" 
    //     onChange={(e) => setDescription(e.target.value)} 
    //     value={description}
    //   />
    //   <hr />
    //   <button type="submit" onClick={handleClick}>Add Todo</button>
    //   {todos.map((todo) => {
    //     return <Todo key={todo.id} title={todo.title} description={todo.description} />
    //   })}
    // </div>

    <div>
      <CardWrapper>
        <i>This content is given in the card wrapper!</i>
      </CardWrapper>
    </div>
  )
}

function CardWrapper({children}) {
  return (
    <div style={{border: '2px solid black', padding: '10px'}}>
      {children}
    </div>
  )
}

// function TextComponent() {
//   return (
//     <div>Hello There!</div>
//   )
// }

export default App
