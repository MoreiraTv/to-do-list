function Navbar() {
  return (
    <nav>
      <div className="content-nav">
        <div
          className="circle-perfil"
          style={{
            backgroundImage:
              "url('https://avatars.githubusercontent.com/u/54282051?v=4')",
          }}
        >
          <div className="content-menu">
            <img
              className="img-user"
              src="https://avatars.githubusercontent.com/u/54282051?v=4"
              alt="usuario"
            />
            <a href="#meu-perfil">Meu perfil</a>
            <a href="#done-tasks">Tarefas concluidas</a>
            <a href="#sair">Sair</a>
          </div>
        </div>
        <div className="title">
          <a href="" className="title">
            TO-DO-LIST
          </a>
        </div>
        <div></div>
      </div>
    </nav>
  );
}


export default Navbar;