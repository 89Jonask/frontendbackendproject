import React, { useState } from "react";

const Form = () => {
  const [postData, setPostData] = useState({
    username: "",
    email: "",
    telephone: "",
  });

  return (
    <div>
      <form id="loginformA" action="http://localhost:3006/user" method="post">
        <div>
          <label for="username">Username: </label>
          <input type="text" id="username" name="username"></input>
          <label for="email">Email: </label>
          <input type="text" id="email" name="email"></input>
          <label for="telephone">Telephone: </label>
          <input type="text" id="telephone" name="telephone"></input>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Form;
