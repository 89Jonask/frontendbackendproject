import React from "react";

const Form = () => {
  return (
    <div>
      <form id="loginformA" action="http://localhost:3006/user" method="post">
        <div>
          <h1>Username: </h1>
          <input type="text" id="username" name="username"></input>
          <h1>E-mail: </h1>
          <input type="text" id="email" name="email"></input>
          <h1>Telephone: </h1>
          <input type="text" id="telephone" name="telephone"></input>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Form;
