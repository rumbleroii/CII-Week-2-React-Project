import React, { useState } from "react";
import "./App.css";

function CalcApp() {
  const [result, setResult] = useState("");

  function keypadClick(e) {
    setResult(result + e.target.name);
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    if (eval(result).toString() === "Infinity") {
      setResult("Divide By Zero Error");
    } else {
      try {
        setResult((eval(result).toString());
      } catch {
        setResult("◘ERROR◘");
      }
    }
  }
  console.log(result);

  function sin() {
    if (result === "") {
      setResult("");
    } else {
      setResult(Math.sin(result));
    }
  }

  function cos() {
    if (result === "") {
      setResult("");
    } else {
      setResult(Math.cos(result));
    }
  }

  function tan() {
    if (result === "") {
      setResult("");
    } else {
      setResult(Math.tan(result));
    }
  }
  function sqrt() {
    if (result === "") {
      setResult("");
    } else {
      setResult(Math.sqrt(result));
    }
  }
  function fact() {
    if (result === "") {
      setResult("");
    } else {
      if (result < 0) {
        setResult("Error");
      } else if (result === 0) {
        setResult(1);
      } else {
        let fact = 1;
        for (let i = 1; i <= result; i++) {
          fact *= i;
        }
        setResult(fact);
      }
    }
  }

  function toggleAdv() {
    var elems = document.getElementsByClassName("adv-func");
    for (var i = 0; i < elems.length; i += 1) {
      elems[i].style.display = "block";
    }
  }

  return (
    <>
      <h1>Calculator</h1>
      <div className="calc-app">
        <form>
          <input type="text" value={result}></input>
        </form>

        <div className="keypad">
          <button id="clear" onClick={clear}>
            Clear
          </button>
          <button name="+" onClick={keypadClick}>
            +
          </button>
          <button name="7" onClick={keypadClick}>
            7
          </button>
          <button name="8" onClick={keypadClick}>
            8
          </button>
          <button name="9" onClick={keypadClick}>
            9
          </button>
          <button name="-" onClick={keypadClick}>
            -
          </button>
          <button name="4" onClick={keypadClick}>
            4
          </button>
          <button name="5" onClick={keypadClick}>
            5
          </button>
          <button name="6" onClick={keypadClick}>
            6
          </button>
          <button name="*" onClick={keypadClick}>
            *
          </button>
          <button name="1" onClick={keypadClick}>
            1
          </button>
          <button name="2" onClick={keypadClick}>
            2
          </button>
          <button name="3" onClick={keypadClick}>
            3
          </button>
          <button name="/" onClick={keypadClick}>
            /
          </button>
          <button name="0" onClick={keypadClick}>
            0
          </button>
          <button name="." onClick={keypadClick}>
            .
          </button>
          <button id="result" onClick={calculate}>
            Result
          </button>
        </div>
        <div>
          <a href="#" onClick={toggleAdv} id="show">
            Advanced Functions
          </a>
        </div>
        <div className="adv-func" style={{ display: "none" }}>
          <button name="!" onClick={fact}>
            !
          </button>
          <button name="sqrt" onClick={sqrt}>
            sqrt
          </button>
          <button name="**" onClick={keypadClick}>
            ^
          </button>
          <button name="sin" onClick={sin}>
            Sin
          </button>
          <button name="cos" onClick={cos}>
            Cos
          </button>
          <button name="tan" onClick={tan}>
            Tan
          </button>
        </div>
      </div>
    </>
  );
}

export default CalcApp;
