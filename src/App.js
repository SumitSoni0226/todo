import './App.css';
import { Header  } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { Todos } from "./components/application/Todos";

function App() {
  const todos = [
    {
      id: 1,
      title: "Office Work",
      desc: "Official work done"
    },
    {
      id: 2,
      title: "Youtube Video",
      desc: "Youtube Video done"
    },
    {
      id: 3,
      title: "Linkedin Post",
      desc: "Linkedin Post done"
    }
  ]
  return (
    <div className="App">
      <Header/>
      <Todos todos = {todos}/>
      <Footer/>
    </div>
  );
}

export default App;
