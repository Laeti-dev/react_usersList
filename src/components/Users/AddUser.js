import React, {useState, useRef} from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorMessage from "../UI/ErrorMessage";
import Wrapper from "../Helpers/Wrapper";

import style from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();



  const submitUserInputHandler = (event, data) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0){
      setError({
        title: "Invalid input",
        message: "Fields should not be empty, age must be > 16"
      });
    } else if (+enteredAge < 16) {
      setError({
        title: "Invalid age",
        message: "you must been over 16 to register"
      });
    }else {
      // send data to object in App
      props.onAddUser(enteredName, enteredAge)
      // reset form
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    };
  };

  const errorHandler = () => {
    setError(null);
  }

  return(
    <Wrapper>
      {error && (
        <ErrorMessage
          title={error.title}
          message={error.message}
          onCloseBtnHandler={errorHandler}
        />
        )}
      <Card className={style.input}>
        <form onSubmit={submitUserInputHandler}>

          <label htmlFor="Name">Name :</label>
          <input
            id="Name"
            type="text"
            ref={nameInputRef}
          />

          <label htmlFor="Age">Age :</label>
          <input
            id="Age"
            type="number"
            ref={ageInputRef}
          />

          <Button type="submit">
            Add user
          </Button>

        </form>
      </Card>
    </Wrapper >
  )
};

export default AddUser;
