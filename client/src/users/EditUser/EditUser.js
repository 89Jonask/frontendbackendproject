import React, { useState, useEffect } from "react";
import { UserForm } from "../UserForm/UserForm";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useRouteMatch, useHistory } from "react-router-dom";
import { getUser, editUser } from "../../shared/apis/ToDoAPI";

export const EditUser = () => {
  const match = useRouteMatch();
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(match.params._id);
      setUser(user);
    };
    fetchUser();
  });

  const onSubmit = async (data) => {
    await editUser(data, match.params._id);
    history.push("/");
  };

  return user ? (
    <div className="container">
      <div className="mt-3">
        <h3>Edit Text</h3>
        <UserForm user={user} onSubmit={onSubmit} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
