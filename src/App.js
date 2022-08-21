import './App.css';

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
  return (
    <Frame>
      <Screen value='0'/>
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
