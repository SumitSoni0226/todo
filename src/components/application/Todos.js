import { TodoItem } from "./TodosItem";

export function Todos ({todos}) {
    return (
        <>
        {todos.map((todoItem) => {return (<TodoItem todoItem = {todoItem}/>)} )}
        </>
    )
}