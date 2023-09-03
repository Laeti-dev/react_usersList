import React from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

import style from "./AddUser.module.css";

const AddUser = () => {
  return(
    <Card className={style.input}>
      <form>

        <label htmlFor="Name">Name :</label>
        <input type="text"/>


        <label htmlFor="Age">Age :</label>
        <input type="number"/>

        <Button type="submit">
          Add user
        </Button>

      </form>
    </Card>
  )
};

export default AddUser;
