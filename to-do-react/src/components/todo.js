import ButtonTrash from "../imgs/buttonTrash";

function ToDo(props) {
  return (
    <>
      {props.done !== true ? (
        <div className="to-do">
          <ButtonTrash className="btn-trash" color={props.color}/>
          <label>{props.title}</label>
          <hr />
          <p>{props.descricao}</p>
        </div>
      ) : (
        <div className="to-do done">
          <ButtonTrash className="btn-trash" color={props.color}/>
          <label>{props.title}</label>
          <hr />
          <p>{props.descricao}</p>
        </div>
      )}
    </>
  );
}

export default ToDo;