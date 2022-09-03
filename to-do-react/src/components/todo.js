function ToDo(props) {
  return (
    <>
      {props.done !== true ? (
        <div className="to-do">
          <label>{props.title}</label>
          <hr />
          <p>{props.descricao}</p>
        </div>
      ) : (
        <div className="to-do done">
          <label>{props.title}</label>
          <hr />
          <p>{props.descricao}</p>
        </div>
      )}
    </>
  );
}

export default ToDo;