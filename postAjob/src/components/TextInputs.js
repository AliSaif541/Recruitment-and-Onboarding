import React, { useMemo } from "react";
import "../styles/TextInputs.css";

const TextInputs = ({ icon, assistiveText, propTop, propBorder, propColor }) => {
  const textInputsStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const inputFieldStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const assistiveTextStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="text-inputs" style={textInputsStyle}>
      <div className="input-text-label1">Input Text Label</div>
      <div className="input-field1" style={inputFieldStyle}>
        <div className="text5">
          <input className="typing" placeholder="Typing |" type="text" />
        </div>
      </div>
      <div className="assistive-text" style={assistiveTextStyle}>
        {assistiveText}
      </div>
    </div>
  );
};

export default TextInputs;
