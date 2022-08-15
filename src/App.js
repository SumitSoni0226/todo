import './App.css';
import { Header  } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Todos } from "./components/application/Todos";
import { AddTodo } from "./components/application/AddTodo";

import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodo] = useState(JSON.parse(localStorage.getItem("todos")));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  function submitTodo(title, desc) {
    console.log(title, desc)
    const id = todos[todos.length - 1]?.id + 1 || 1
    const newTodo = {
      id: id,
      title: title,
      desc: desc
    }
    setTodo([...todos,
      newTodo,
    ])
  }

  function deleteTodo(todo) {
    console.log(`Deleting todo with ID: ${todo.id}`)
    setTodo(todos.filter((e) => {
      return e !== todo;
    }));
  }
  // const todos = [
  //   {
  //     id: 1,
  //     title: "Office Work",
  //     desc: "Official work done"
  //   },
  //   {
  //     id: 2,
  //     title: "Youtube Video",
  //     desc: "Youtube Video done"
  //   },
  //   {
  //     id: 3,
  //     title: "Linkedin Post",
  //     desc: "Linkedin Post done"
  //   }
  // ]
  return (
    <div className="App">
      <Header/>
      <AddTodo submitTodo={submitTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <Footer/>
    </div>
  );
}

export default App;
