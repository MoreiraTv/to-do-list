import ButtonTrash from "../imgs/buttonTrash";
import ButtonDone from "../imgs/buttonDone";
import IconDone from "../imgs/iconDone";
import Db from "../utils/db.js";

const handleClickTrash = (id, e) => {
  e.preventDefault();
  var array = Db.filter((item) => item.id !== id);

  var element = document.getElementById(`${id}`);
  element.parentNode.removeChild(element);
  console.log(array);
};

const handleClickDone = (id, e) => {
  e.preventDefault();
  var element = document.getElementById(`${id}`);

  if (element.classList.value.includes("done")) {
    element.classList.remove("done");
  } else {
    element.classList.add("done");
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
          <div className="buttonsTodo">
            <div className="buttonsAbsolute">
              <a
                className="btn-trash"
                onClick={(e) => handleClickTrash(props.id, e)}
                href
              >
                <ButtonTrash color={props.color} className="btn-trash" />
              </a>
              <a
                className="btn-done"
                onClick={(e) => handleClickDone(props.id, e)}
                href
              >
                <ButtonDone color={props.color} className="btn-done" />
              </a>
            </div>
          </div>
          <label>{props.title}</label>
          <hr />
          <p>{props.descricao}</p>
        </div>
      ) : (
        <div className="to-do done" id={props.id}>
          <div className="X">
            <IconDone />
          </div>
          <div className="buttonsTodo">
            <div className="buttonsAbsolute">
              <a
                className="btn-trash"
                onClick={(e) => handleClickTrash(props.id, e)}
                href
              >
                <ButtonTrash color={props.color} className="btn-trash" />
              </a>
            </div>
            <div className="btn-done buttonsAbsolute">
              <a
                className=""
                onClick={(e) => handleClickDone(props.id, e)}
                href
              >
                <ButtonDone color={props.color} className="btn-done" />
              </a>
            </div>
          </div>
          <label>{props.title}</label>
          <hr />
          <p>{props.descricao}</p>
        </div>
      )}
    </>
  );
}

export default ToDo;
