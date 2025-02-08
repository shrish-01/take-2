import { useAtomValue, useSetAtom } from "jotai"
import { filteredTodosAtom } from "../atoms/filteredTodosAtom";

export default function FilteredTodos() {

    const filteredTodos = useAtomValue(filteredTodosAtom);

    return (
        <>
            {filteredTodos.map((todo) => {
                return (
                    <div key={todo._id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                    </div>
                )
            })}
        </>
    )
}