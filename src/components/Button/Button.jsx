import React from "react";
import "./button.scss";

const Button = ({ text, ...props }) => {
  return (
    <div className="btn-container">
      <button className="btn-primary" {...props}>
        {text}
      </button>
    </div>
  );
};

export default Button;
