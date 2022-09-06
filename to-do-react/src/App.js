import Navbar from "./components/navbar.js";
import ToDo from "./components/todo.js";
import Db from './utils/db.js'

import "./App.css";

function App() {
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

          {
            Db.map((todo) => (
              <>
             <ToDo 
              title={todo.title}
              descricao={todo.description}
              done={todo.done}
              id={todo.id}
              />
              </>
            ))
          }
        </section>
      </main>
      <section></section>
    </>
  );
}

export default App;
