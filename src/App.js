import React, { useState } from "react";

import './App.css';

import btnClickHandlerFactory from "./utils/btnClickHandlerFactory";

import Frame from "./components/Frame";
import Screen from "./components/Screen";
import ButtonFrame from "./components/ButtonFrame";
import Button from "./components/Button";

const btnValues = [
  ["X", "/", "+", "-"],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, ".", "=",],
  ["Load", "Save", "C"],
];

function App() {

  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    result: 0,
  });

  return (
    <Frame>
      <Screen value={calc.num ? calc.num : calc.result} />
      <ButtonFrame>
        {
          btnValues.flat().map((btn, i) => {
            let className;
            if(btn === "Save" || btn === "Load") {
              className = "split";
            } else if (btn === "C") {
              className = "reset";
            } else {
              className = "";
            }
            return (
              <Button
                key={i}
                className={className}
                value={btn}
                onClick={(e) => {
                  e.preventDefault();
                  const resultObject = btnClickHandlerFactory(btn)(e, calc) ??  {
                    sign: "",
                    num: 0,
                    result: 0,
                  };
                  setCalc({
                    ...calc,
                    ...resultObject
                  })
                }}
              />
            );
          })
        }
      </ButtonFrame>
    </Frame>
  );
}

export default App;
