import Button from "./Button"
import styles from "./App.module.css"
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyWord, setKeyWord] = useState("");
  const onClick = () => setValue((prev) => prev +1 );
  const onChange = (event) => setKeyWord(event.target.value);
  console.log("i run all the time");
  useEffect(console.log("Call The API..."), []); //1번만 사용하게 만들어줌
  useEffect(() => {
    console.log("I run when 'keyWord' changes");
  }, [keyWord]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  return (
    <div>
      <input value={keyWord}
       type="text" 
       placeholder="Search here..." 
       onChange={onChange}></input>
     <h1 >{counter}</h1>
     <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
