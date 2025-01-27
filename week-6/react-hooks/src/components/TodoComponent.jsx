import { useState } from "react";

export default function TodoComponent({todos, setTodos}) {
    
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleClick() {
        if(inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    }

    return (
        <>
            <div>
                <input onChange={handleInputChange} type="text" name="task" id="task"/>
                <button type='submit' onClick={handleClick}>Add Todo</button>
            </div>

            <div>
                {todos.length === 0 ? <p>No todos</p> : todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })}
            </div>
        </>
    )
}