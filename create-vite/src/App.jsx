import { useState } from "react";

function App() {
  return (
    <>
      <Calculator />
    </>
  );
}

export default App;

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handelValue = (value) => {
    setInput(input + value);
  };
  const handelClear = () => {
    setInput("");
    setResult("");
  };
  const handelBackspace = () => {
    setInput(input.slice(0, -1));
  };
  const calculateResult = () => {
    try {
      setResult(eval(input))
    } catch (err) {
      setResult('Error');
      console.log("Invalid input", err);
    }
  };
  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <div className="display">
        <input type="text" name="result" id="result" value={input} readOnly disabled />
        <br />
        <label htmlFor="result" className="result">
          {result}
        </label>
      </div>
      <div className="buttons">
        <button type="button" onClick={handelClear}>
          C
        </button>
        <button type="button" onClick={handelBackspace}>
          &larr;
        </button>
        <button type="button" onClick={() => handelValue("%")}>
          %
        </button>
        <button type="button" onClick={() => handelValue("/")}>
          /
        </button>
        <button type="button" onClick={() => handelValue("7")}>
          7
        </button>
        <button type="button" onClick={() => handelValue("8")}>
          8
        </button>
        <button type="button" onClick={() => handelValue("9")}>
          9
        </button>
        <button type="button" onClick={() => handelValue("*")}>
          X
        </button>
        <button type="button" onClick={() => handelValue("4")}>
          4
        </button>
        <button type="button" onClick={() => handelValue("5")}>
          5
        </button>
        <button type="button" onClick={() => handelValue("6")}>
          6
        </button>
        <button type="button" onClick={() => handelValue("+")}>
          +
        </button>
        <button type="button" onClick={() => handelValue("1")}>
          1
        </button>
        <button type="button" onClick={() => handelValue("2")}>
          2
        </button>
        <button type="button" onClick={() => handelValue("3")}>
          3
        </button>
        <button type="button" onClick={() => handelValue("-")}>
          -
        </button>
        <button type="button" onClick={() => handelValue("0")}>
          0
        </button>
        <button type="button" onClick={() => handelValue(".")}>
          .
        </button>
        <button type="button" className="equal" onClick={calculateResult}>
          =
        </button>
      </div>
    </div>
  );
}
