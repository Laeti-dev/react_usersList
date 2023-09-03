import React from "react";

import style from "./Button.module.css"

const Button = (props) => {
  return(
    <button
      type={props.type || "button"}
      className={style.button}
    >
      {props.children}
    </button>
  )
};

export default Button;
