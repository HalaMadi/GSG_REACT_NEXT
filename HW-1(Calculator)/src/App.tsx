import React, { useState } from "react";
import "./index.css";
import DisplayResult from "./Component/Result/DisplayResult";
const calculator = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const App = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleInput = (value: string) => {
    setInput(input + value);
  };
  const handleResult = () => {
    try {
      const result = eval(input);
      setInput(input + "=");
      setResult(result.toString());
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setInput("Error");
    }
  };
  const handleReset = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      <DisplayResult value={input} result={result} />
      <div className="container">
        {calculator.map((value, index) => (
          <button
            className="btn numbers-btn"
            key={value + index}
            onClick={() => handleInput(value)}
          >
            {value}
          </button>
        ))}
        <button className="btn plus-mins" onClick={() => handleInput("+")}>
          +
        </button>
        <button className="btn plus-mins" onClick={() => handleInput("-")}>
          -
        </button>
      </div>
      <button onClick={handleReset} className="btn reset">
        Reset
      </button>
      <button onClick={handleResult} className="btn result">
        =
      </button>
    </div>
  );
};

export default App;
