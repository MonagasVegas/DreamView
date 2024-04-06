import React from "react";

const InputSelect = ({option}) => {
  return (
    <div className="input-select">
      <select>
        <option>{option}</option>
      </select>
    </div>
  );
};

export default InputSelect;
