import React from "react";

import Button from "./Button";

import style from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={style.back}>
      <div className={style["pop-up"]}>
        <div className={style.top}>
          <h1>Inalid input</h1>
        </div>
        <div>
          <Button>Close</Button>
        </div>
      </div>

    </div>
  )
};

export default ErrorMessage;
