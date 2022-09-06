import ButtonTrash from "../imgs/buttonTrash";
import Db from '../utils/db.js';


const handleClickTrash = (id, e) => {
  e.preventDefault();
  var array = Db.filter((item) => item.id !== id);

  var element = document.getElementById(`${id}`)
  element.parentNode.removeChild(element)
  console.log(array);
}

const handleClickDone = (id, e) => {
  e.preventDefault();
  var element = document.getElementById(`${id}`)
  
  if (e.detail === 2) {
    if (element.classList.value.includes("done")) {
      element.classList.remove("done");
    } else {
      element.classList.add("done");
    }
  }
}

function ToDo(props) {
  return (
    <>
      {props.done !== true ? (
        <div className="to-do" id={props.id} onClick={((e) => handleClickDone(props.id, e))}>
          <div className="X"></div>
          <a className="btn-trash" onClick={((e) => handleClickTrash(props.id, e))}>
            <ButtonTrash color={props.color} className="btn-trash" />
          </a>
          <label onClick={((e) => handleClickDone(props.id, e))}>{props.title}</label>
          <hr />
          <p onClick={((e) => handleClickDone(props.id, e))}>{props.descricao}</p>
        </div>
      ) : (
        <div className="to-do done" id={props.id} onClick={((e) => handleClickDone(props.id, e))}>
          <div className="X"></div>
          <a className="btn-trash" onClick={((e) => handleClickTrash(props.id, e))}>
            <ButtonTrash className="btn-trash" color={props.color} />
          </a>
          <label onClick={((e) => handleClickDone(props.id, e))}>{props.title}</label>
          <hr />
          <p onClick={((e) => handleClickDone(props.id, e))}>{props.descricao}</p>
        </div>
      )}
    </>
  );
}

export default ToDo;