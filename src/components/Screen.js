import ScaleText from "react-scale-text";

import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <div className="screen" mode="single" max={70}>
      <ScaleText>
        {value}
      </ScaleText>
    </div>
  );
};

export default Screen;