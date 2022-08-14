import "./todoStyle.css"; 

export function TodoItem({ todoItem, deleteTodo }) {
    return (
        <div className="todoContainer">
        <h1>Todo :{todoItem.id}</h1>
        <h1>Title :{todoItem.title}</h1>
        <h1>Description :{todoItem.desc}</h1>
            <button onClick={() => { deleteTodo(todoItem) }}>Delete Todo</button>
        </div>
    )
} 