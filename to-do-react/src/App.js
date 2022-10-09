import { useEffect, useState } from "react";
import Navbar from "./components/navbar.js";
import ToDo from "./components/todo.js";
// import Db from "./utils/db.js";
import axios from "axios";

import "./App.css";

const baseUrl = "http://localhost:3333";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get(`${baseUrl}/tasks`).then((res)=>{
      setTodos(res.data.tasks);
    });
  }, []);
  // console.log(todos);
  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>
      <main className="content">
        <section className="newTodo">
          <form action="">
            <input type="text" placeholder="Titulo" id="title" />
            <input type="text" placeholder="Descrição" id="desc" />
            <input type="submit" value="ADD" className="submit" />
          </form>
        </section>

        <section className="contentToDo">
          {todos.map((todo) => (
            <>
              <ToDo
                id={todo.id}
                title={todo.title}
                description={todo.description}
                status={todo.status}
                done={todo.status === "done" ? true : false}
                setTodos={setTodos}
              />
            </>
          ))}
        </section>
      </main>
      <section></section>
    </>
  );
}

export default App;
