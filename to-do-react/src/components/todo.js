import ButtonTrash from "../imgs/buttonTrash";


const handleClickTrash = (e) =>{
  e.preventDefault();
  console.log("Teste");
}

function ToDo(props) {
  return (
    <>
      {props.done !== true ? (
        <div className="to-do">
          <a className="btn-trash" onClick={handleClickTrash}>
            <ButtonTrash color={props.color} className="btn-trash" />
          </a>
          <label>{props.title}</label>
          <hr />
          <p>{props.descricao}</p>
        </div>
      ) : (
        <div className="to-do done">
          <a className="btn-trash" onClick={handleClickTrash}>
            <ButtonTrash className="btn-trash" color={props.color} />
          </a>
          <label>{props.title}</label>
          <hr />
          <p>{props.descricao}</p>
        </div>
      )}
    </>
  );
}

export default ToDo;