export function AddTodo({ submitTodo }) {
    return (
        <>
            <form className="addTodoContainer">
                <label htmlFor="title">Title</label>
                <input id="title" />
                <label htmlFor="description">Description</label>
                <input id="description" />
                <button onClick={submitTodo}>Add Todo</button>
            </form>
        </>
    )
}