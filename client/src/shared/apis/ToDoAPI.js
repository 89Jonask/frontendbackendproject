export const getUsers = () =>
  fetch("http://localhost:3006/user").then((res) => res.json());

export const createsUser = (user) =>
  fetch("http://localhost:3006/user", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

export const editUser = (user, _id) =>
  fetch(`http://localhost:3006/edituser${_id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

export const deleteUser = (user, _id) =>
  fetch(`http://localhost:3006/deleteuser${_id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

export const getUser = (_id) =>
  fetch(`http://localhost:3006/user${_id}`).then((res) => res.json());
