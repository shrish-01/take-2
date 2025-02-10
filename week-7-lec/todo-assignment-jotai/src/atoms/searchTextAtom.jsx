import { atom } from "jotai";

export const searchTextAtom = atom("");

/** RANDOM EXPLAINATION */

// function States() {
//     // atom
//     const [ todos, setTodos ] = useState({
//         title: "",
//         description: "",
//     });

//     // getStates -- [ todos, setTodos ]
//     // getStateValue -- todos
//     // getSetState -- setTodos
// }

// function Parent() {

//     return (
//         <>
//             <Child1 />
//         </>
//     )
// }

// function Child1({todos}) {
//     return (
//         <>
//             <Child2 />
//         </>
//     )
// }

// function Child2({todos}) {
//     const [ todos, setTodos ] = getStates(States)
//     return (
//         <div>
//             {todos}
//         </div>
//     )
// }