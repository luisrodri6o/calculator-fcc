import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";
import freecodelogo from "./images/freecodecamp-logo.png";
import Button from "./components/Button";
import Screem from "./components/Screem";

function App() {
  const [input, setInput] = useState(" ");

  const addInput = (value) => {
    setInput(input + value);
  };
  const clear = () => {
    setInput("");
  };

  const calcResult = () => {
    setInput(evaluate(input));
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='fcc-logo' src={freecodelogo} />
      </div>

      <div className='calculator-container'>
        <Screem input={input} />
        <div className='row'>
          <Button clickDrive={addInput}>1</Button>
          <Button clickDrive={addInput}>2</Button>
          <Button clickDrive={addInput}>3</Button>
          <Button clickDrive={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button clickDrive={addInput}>4</Button>
          <Button clickDrive={addInput}>5</Button>
          <Button clickDrive={addInput}>6</Button>
          <Button clickDrive={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button clickDrive={addInput}>7</Button>
          <Button clickDrive={addInput}>8</Button>
          <Button clickDrive={addInput}>9</Button>
          <Button clickDrive={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button clickDrive={calcResult}>=</Button>
          <Button clickDrive={addInput}>0</Button>
          <Button clickDrive={addInput}>.</Button>
          <Button clickDrive={addInput}>/</Button>
        </div>
        <div className='row'>
          <Button clickDrive={clear}>clear</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
