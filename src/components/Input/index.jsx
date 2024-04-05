import React from "react";
import "./index.css";

// eslint-disable-next-line react/prop-types
const Input = ({ label, name, value, onChange }) => {
  return (
    <div className="input-field">
      <input
        type="text"
        required
        name={name}
        value={value}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;
