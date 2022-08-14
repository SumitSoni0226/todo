import { useState } from "react"

export function AddTodo({ submitTodo }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    function submit(e) {
        e.preventDefault();
        submitTodo(title, desc)
    }
    return (
        <>
            <form className="addTodoContainer" onSubmit={submit}>
                <label htmlFor="title">Title</label>
                <input id="title" value={title} onChange={((e) => setTitle(e.target.value))} />
                <label htmlFor="description">Description</label>
                <input id="description" value={desc} onChange={((e) => setDesc(e.target.value))} />
                <button>Add Todo</button>
            </form>
        </>
    )
}