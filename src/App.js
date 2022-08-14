import './App.css';
import { Header  } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Todos } from "./components/application/Todos";
import { AddTodo } from "./components/application/AddTodo";

import { useState } from 'react';

function App() {
  const [todos, setTodo] = useState([]);
  function submitTodo(e) {
    e.preventDefault();
    setTodo([
      {
        id: 0,
        title: "SKDH",
        desc: "Official work done"
      },
    ])
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
      <Todos todos = {todos}/>
      <Footer/>
    </div>
  );
}

export default App;
