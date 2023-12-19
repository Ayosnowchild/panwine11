import React from "react";
import "./button.css";
function Button({ title, className, btnType }) {
  return (
    <button
      className={`${className} ${
        btnType === "pry" ? "pryBtn" : btnType === "sec" ? "secBtn" : "terBtn"
      }`}
    >
      {title}
    </button>
  );
}

export default Button;
