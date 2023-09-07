import React from "react";

import Button from "./Button";

import style from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {

  return (
    <div className={style.back} onClick={props.onCloseBtnHandler}>
      <div className={style["pop-up"]}>
        <div className={style.top}>
          <h1>{props.title}</h1>
        </div>
        <div>
          <p>{props.message}</p>
          <Button onClick={props.onCloseBtnHandler}>Close</Button>
        </div>
      </div>

    </div>
  )
};

export default ErrorMessage;
