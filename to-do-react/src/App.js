import Navbar from "./components/navbar.js";
import ToDo from "./components/todo.js";

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
          <ToDo
            title="Title do to-do 2"
            descricao="Descrição Da Tarefa Aqui, 
            Descrição Da Tarefa Aqui, Descrição Da Tarefa Aqui, 
            Descrição Da Tarefa Aqui."
            done={false}
            // color="#f8f"
          />

          <ToDo
            title="Title do to-do 1"
            descricao="Descrição Da Tarefa Aqui, Descrição Da Tarefa Aqui, Descrição Da
            Tarefa Aqui, Descrição Da Tarefa Aqui."
            done={true}
          />

        </section>
      </main>
      <section></section>
    </>
  );
}

export default App;
