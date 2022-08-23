import React, { useState } from "react";

import './App.css';

import btnClickHandlerFactory from "./utils/btnClickHandlerFactory";

import Frame from "./components/Frame";
import Screen from "./components/Screen";
import ButtonFrame from "./components/ButtonFrame";
import Button from "./components/Button";
import AsyncButton from "./components/AsyncButton";

const btnValues = [
  ["X", "/", "+", "-"],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, ".", "=",],
  ["C",],
];

// Only to mimic slow server response time
const delayRequest  = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function App() {

  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    result: 0,
  });

  const load = async () => {
    const response = await fetch("http://localhost:4200/load",
        { method: 'GET',
          headers: {'Content-Type': 'application/json'}
        })
    await delayRequest(3000);
    const { result }= await response.json();
    setCalc({
      ...calc,
      num: result,
      result
    });
  };

  const save = async () => {
    const numToSave = calc.result;
    await fetch("http://localhost:4200/save",
        { method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': 0
          },
          body: JSON.stringify({ numToSave }),
        });
    await delayRequest(3000);
  };

  return (
    <Frame>
      <Screen value={calc.num ? calc.num : calc.result} />
      <ButtonFrame>
        {
          btnValues.flat().map((btn, i) => {
            const className = btn === "Save" || btn === "Load" ?
              "split"
              : btn === "C" ?
              "reset":
              "";
            return (
              <Button
                key={i}
                className={className}
                value={btn}
                onClick={(e) => {
                  e.preventDefault();
                  setCalc({
                    ...calc,
                    ...btnClickHandlerFactory(btn)(e, calc)
                  });
                }}
              />
            );
          })
        }
        <AsyncButton onClick={load}>Load</AsyncButton>
        <AsyncButton onClick={save}>Save</AsyncButton>
      </ButtonFrame>
    </Frame>
  );
}

export default App;
