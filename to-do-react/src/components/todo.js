import ButtonTrash from "../imgs/buttonTrash";
import Db from '../utils/db.js';


const handleClickTrash = (id, e) =>{
  e.preventDefault();
  var array = Db.filter((item) => item.id !== id);
  
  var element = document.getElementById(`${id}`)
  element.parentNode.removeChild(element)
  console.log(array);
}

function ToDo(props) {
  return (
    <>
      {props.done !== true ? (
        <div className="to-do" id={props.id}>
          <a className="btn-trash" onClick={((e) => handleClickTrash(props.id, e))}>
            <ButtonTrash color={props.color} className="btn-trash" />
          </a>
          <label>{props.title}</label>
          <hr />
          <p>{props.descricao}</p>
        </div>
      ) : (
        <div className="to-do done" id={props.id}>
          <a className="btn-trash" onClick={((e) => handleClickTrash(props.id, e))}>
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