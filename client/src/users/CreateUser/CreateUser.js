import React from "react";
import { UserForm } from "../UserForm/UserForm";
import { createsUser } from "../../shared/apis/ToDoAPI";
import { useHistory } from "react-router-dom";

export const CreateUser = () => {
  const history = useHistory();

  const onSubmit = async (data) => {
    await createsUser(data);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Create Text</h3>
        <UserForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
