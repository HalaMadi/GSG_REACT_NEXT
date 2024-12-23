import { useState } from "react";
import "./index.css";
const App = () => {
  const calculator = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");



  return (
    <div className="calculator">
    <div className="container">
      {calculator.map((value, index) => (
        <button
          className="btn numbers-btn"
          key={value + index}
        >
          {value}
        </button>
      ))}
      <button className="btn plus-mins">
        +
      </button>
      <button className="btn plus-mins">
        -
      </button>
    </div>
    <button  className="btn reset">
      Reset
    </button>
    <button  className="btn result">
      =
    </button>
  </div>
  );
};

export default App;
