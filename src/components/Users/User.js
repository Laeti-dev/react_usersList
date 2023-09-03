import React from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

const User = () => {
  return(
    <form>
      <Card>
        <div>
          <label>Name</label>
          <input type="text"/>
        </div>
        <div>
          <label>Age</label>
          <input type="number"/>
        </div>
        <div>
          <Button
            type="submit"
          >
            Add user
          </Button>
        </div>
      </Card>
    </form>
  )
};

export default User;
