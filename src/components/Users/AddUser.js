import React, {useState} from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

import style from "./AddUser.module.css";

const AddUser = () => {
  const users = []
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("")

  const userInputHandler = (input, value) => {
    if (input === "Name") {
      setUserName(value)
    } else {
      setUserAge(value)
    }
  };

  const submitUserInputHandler = (event, data) => {
    event.preventDefault();
    if (userName.length !== 0 && userAge !== 0) {
      users.push({"userName": userName, "userAge": userAge});
      console.log(users)
    } else {
      console.log("missing info");
    };
  }
  return(
    <Card className={style.input}>
      <form onSubmit={submitUserInputHandler}>

        <label htmlFor="Name">Name :</label>
        <input type="text" onChange={(event) => {userInputHandler("Name", event.target.value)}}/>


        <label htmlFor="Age">Age :</label>
        <input type="number" onChange={(event) => {userInputHandler("Age", event.target.value)}}/>

        <Button type="submit">
          Add user
        </Button>

      </form>
    </Card>
  )
};

export default AddUser;
