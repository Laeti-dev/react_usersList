import React, {useState} from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorMessage from "../UI/ErrorMessage";
import Wrapper from "../Helpers/Wrapper";

import style from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const userInputHandler = (input, value) => {
    if (input === "Name") {
      setUserName(value)
    } else {
      setUserAge(value)
    }
  };

  const submitUserInputHandler = (event, data) => {
    event.preventDefault();
    if (userName.trim().length === 0){
      setError({
        title: "Invalid input",
        message: "Fields should not be empty, age must be > 16"
      });
    } else if (+userAge < 16) {
      setError({
        title: "Invalid age",
        message: "you must been over 16 to register"
      });
    }else {
      // send data to object in App
      props.onAddUser(userName, userAge)
      // reset form
      setUserName("");
      setUserAge("");
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
            value={userName}
            onChange={(event) => {userInputHandler("Name", event.target.value)}}
          />

          <label htmlFor="Age">Age :</label>
          <input
            id="Age"
            type="number"
            value={userAge}
            onChange={(event) => {userInputHandler("Age", event.target.value)}}
          />

          <Button type="submit">
            Add user
          </Button>

        </form>
      </Card>
    </Wrapper>
  )
};

export default AddUser;
