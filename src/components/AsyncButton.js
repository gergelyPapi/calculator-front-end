import React, { useState } from "react";

import "./AsyncButton.css";

export default function Button(props) {
  const [buttonState, setButtonState] = useState("loaded");
  const onClick = async () => {
    setButtonState("loading");
    await props.onClick();
    setButtonState("loaded");
  };
  return (
    <button className="split" onClick={onClick} disabled={buttonState === "loading"}>
      {buttonState === "loaded" ? props.children : "..."}
    </button>
  );
}