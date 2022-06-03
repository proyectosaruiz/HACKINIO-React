import "./button.css";
import React from "react";

function Button({ children, onClick, type, primary, className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${primary ? "button" : ""} ${className ? className : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
