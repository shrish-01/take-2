import { useState } from "react";
import { filteredTodosAtom } from "../atoms/filteredTodosAtom";
import FilteredTodos from "./FilteredTodos";
import { useSetAtom } from "jotai";
import axios from "axios";

export default function RightPanel() {
    const setFilteredTodos = useSetAtom(filteredTodosAtom);
    const [ inputValue, setInputValue ] = useState("");

    async function handleSearch() {
        const todos = await axios.get(`http://localhost:3000/filteredTodos?searchText=${inputValue}`);
        console.log(todos.data.filteredTodos);
        setFilteredTodos(todos.data.filteredTodos);
    }

    return (
        <>
            <input type="text" placeholder="search for todos" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>

            <button onClick={handleSearch}>Filter Todos!</button>

            <FilteredTodos />
        </>
    )
}