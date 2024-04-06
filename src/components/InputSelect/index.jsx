import React, { useEffect, useState } from "react";
import { getFilms } from "../../services/getFilms";

const InputSelect = ({ label, values, name, onChange }) => {

  return (
    <div className="input-field select">
      <select 
      name={name}
      onChange={onChange} 
      >
        {['...', ...values].map((value, index) => (
          <option  key={index} value={value}>{value}</option>
        ))}
      </select>
      <label>{label}</label>
    </div>
  );
};

export default InputSelect;
