import React from "react";
import "./index.css";

// eslint-disable-next-line react/prop-types
const Input = ({ label, name, value, onChange, type='text' }) => {
  return (
    <div className="input-field">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;
