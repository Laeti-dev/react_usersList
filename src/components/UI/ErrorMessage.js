import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";

import style from "./ErrorMessage.module.css";

const Backdrop = (props) => {
  return <div className={style.back} onClick={props.onCloseBtnHandler}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={style["pop-up"]}>
        <div className={style.top}>
          <h1>{props.title}</h1>
        </div>
        <div>
          <p>{props.message}</p>
          <Button onClick={props.onCloseBtnHandler}>Close</Button>
        </div>
      </div>
  )
};

const ErrorMessage = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          onCloseBtnHandler={props.onCloseBtnHandler}
        />,
        document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ModalOverlay
            title={props.title}
            message={props.message}
            onCloseBtnHandler={props.onCloseBtnHandler}
          />,
          document.getElementById("overlay-root")
        )}
    </React.Fragment>
  )
};

export default ErrorMessage;
