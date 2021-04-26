import {useState} from "react";
import './App.css';
import Button from "./components/button";
import Count from "./components/count";

function App() {

  const [counter, setCounter] = useState(0)

  const updateCountAdd = () => {
    setCounter(counter + 1)
  }

  const updateCountSubtract = () => {
    setCounter(counter - 1 )
  }

  const updateCountDouble = () => {
    setCounter(counter * 2)
  }

  const updateCountHalf = () => {
    setCounter(counter / 2)
  }
  return (
    <div className="App">
    
      <Count counter={counter}/>
      <Button updateCounter={updateCountAdd} lable="add 1"/>
      <Button updateCounter={updateCountSubtract} lable="subract 1"/>
      <Button updateCounter={updateCountDouble} lable="double"/>
      <Button updateCounter={updateCountHalf} lable="half"/>
      

    </div>
  );
}

export default App;
