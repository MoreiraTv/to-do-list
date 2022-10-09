import ButtonTrash from "../imgs/buttonTrash";
import ButtonDone from "../imgs/buttonDone";
import IconDone from "../imgs/iconDone";
import axios from "axios";

const baseUrl = "http://localhost:3333";

const handleClickTrash = (id, setTodos, e) => {
  e.preventDefault();
  axios.delete(`${baseUrl}/tasks/${id}`).then();

  var element = document.getElementById(`${id}`);
  element.parentNode.removeChild(element);
};

const handleClickDone = (todo, e) => {
  e.preventDefault();
  var element = document.getElementById(`${todo.id}`);

  if (element.classList.value.includes("done")) {
    element.classList.remove("done");
    axios
      .put(`${baseUrl}/tasks/${todo.id}`, {
        title: todo.title,
        description: todo.description,
        status: "pendente",
      })
      .then();
  } else {
    element.classList.add("done");
    axios
      .put(`${baseUrl}/tasks/${todo.id}`, {
        title: todo.title,
        description: todo.description,
        status: "done",
      })
      .then();
  }
};

function ToDo(props) {
  return (
    <>
      {props.done !== true ? (
        <div className="to-do" id={props.id}>
          <div className="X">
            <IconDone />
          </div>

          <label>{props.title}</label>
          <hr />
          <p>{props.description}</p>
          <div className="buttonsTodo">
            <a
              className="btn-trash"
              onClick={(e) => handleClickTrash(props.id, props.setTodos, e)}
              href
            >
              <ButtonTrash color={props.color} className="btn-trash" />
            </a>
            <a
              className="btn-done"
              onClick={(e) => handleClickDone(props, e)}
              href
            >
              <ButtonDone color={props.color} className="btn-done" />
            </a>
          </div>
        </div>
      ) : (
        <div className="to-do done" id={props.id}>
          <div className="X">
            <IconDone />
          </div>

          <label>{props.title}</label>
          <hr />
          <p>{props.description}</p>
          <div className="buttonsTodo">
            <a
              className="btn-trash"
              onClick={(e) => handleClickTrash(props.id, props.setTodos, e)}
              href
            >
              <ButtonTrash color={props.color} className="btn-trash" />
            </a>
            <a
              className="btn-done"
              onClick={(e) => handleClickDone(props, e)}
              href
            >
              <ButtonDone color={props.color} className="btn-done" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default ToDo;
