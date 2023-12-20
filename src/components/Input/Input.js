import React from "react";
import "./input.css";
function Input({ label, placeholder, ...props }) {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor="name">
        {label}
      </label>
      <input className="input" placeholder={placeholder} {...props} />
    </div>
  );
}

export default Input;
