import React, { useState } from "react";

import './App.css';

import btnClickHandlerFactory from "./utils/btnClickHandlerFactory";

import Frame from "./components/Frame";
import Screen from "./components/Screen";
import ButtonFrame from "./components/ButtonFrame";
import Button from "./components/Button";

const btnValues = [
  ["X", "/", "+", "-"],
  [1, 2, 3,],
  [4, 5, 6,],
  [7, 8, 9,],
  [0, ".", "="],
  ["Load", "Save"],
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
            if(btn === "=") {
              className = "equals";
            } else if (btn === "Save" || btn === "Load") {
              className = "split";
            } else {
              className = "";
            }
            return (
              <Button
                key={i}
                className={className}
                value={btn}
                onClick={() => {
                  const {
                    sign,
                    num,
                    result
                  } = btnClickHandlerFactory(btn);
                  setCalc({
                    ...calc,
                    sign,
                    num,
                    result
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
