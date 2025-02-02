import { useState, useEffect } from "react";
import axios from "axios";

export default function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://localhost:3001/todos");
            setTodos(response.data.todos);
        }

        fetchData();
    }, []);

    return todos;
}