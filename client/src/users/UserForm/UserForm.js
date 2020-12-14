import React from "react";
import { useForm } from "react-hook-form";

export const UserForm = ({ user, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { text: user ? user.text : "" },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="text">Text:</label>
        <input
          className="form-control"
          ref={register}
          type="text"
          name="text"
          id="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          className="form-control"
          ref={register}
          type="username"
          name="username"
          id="username"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Save Text
        </button>
      </div>
    </form>
  );
};
