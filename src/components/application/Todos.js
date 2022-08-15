import { TodoItem } from "./TodosItem";

export function Todos({ todos, deleteTodo }) {
    return (
        <>
            {todos.length === 0 ? <h1>No Todos to display</h1> : todos.map((todoItem) => {
                return (<TodoItem todoItem={todoItem} key={todoItem
                    .id} deleteTodo={deleteTodo} />)
            })}
        </>
    )
}