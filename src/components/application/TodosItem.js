import "./todoStyle.css"; 

export function TodoItem ({todoItem}) {
    return (
        <div className="todoContainer">
        <h1>Todo :{todoItem.id}</h1>
        <h1>Title :{todoItem.title}</h1>
        <h1>Description :{todoItem.desc}</h1>
        <button>Delete Todo</button>
        </div>
    )
} 