import './App.css';
import { Header  } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Todos } from "./components/application/Todos";
import { AddTodo } from "./components/application/AddTodo";

import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodo] = useState([]);
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

  useEffect(() => {
    console.log(JSON.stringify(todos))
  }, [todos])

  function deleteTodo(todo) {
    console.log(todo.id)
    const indexOfTodo = todos.indexOf(todo);
    todos.splice(indexOfTodo, 1);
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
