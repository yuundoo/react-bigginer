import Button from "./Button"
import styles from "./App.module.css"
import {useState, useEffect} from "react";


function App() {
  const [toDo, setToDO] = useState("");
  const [toDos, setToDOs] = useState([]);
  const onChange = (event) => setToDO(event.target.value);
  const onSubmit = (event) => {event.preventDefault();
  console.log(toDo);
  if(toDo === ""){
    return;
  }
  setToDO("");
  setToDOs(currentArray => [toDo, ...currentArray]);
  console.log(toDos);
}
 
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit} >
      <input value={toDo} onChange={onChange} type="text" placeholder="Write anything" ></input>
      </form>
      <button>Add To DO</button>
    </div>
  );
}

export default App;
