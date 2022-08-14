import { TodoItem } from "./TodosItem";

export function Todos({ todos, deleteTodo }) {
    return (
        <>
            {todos.map((todoItem) => {
                return (<TodoItem todoItem={todoItem} key={todoItem
                    .id} deleteTodo={deleteTodo} />)
            })}
        </>
    )
}