import http from "../UserAPI";
import Axios from "axios";

export const getUsers = Axios.get(`/`).then(
  (res) => {
    console.log(res.data);
  },
  (error) => {
    console.log(error);
  }
);

const searchForUser = (userSearch) => {
  return http.get(`/${userSearch}`);
};

const getUser = (findUser) => {
  return http.get(`/${findUser}`);
};

const createsUser = (createdUser) => {
  return http.post(`/${createdUser}`);
};

const editUser = (editedUser) => {
  return http.post(`/${editedUser}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  searchForUser,
  createsUser,
  editUser,
  getUser,
  getUsers,
};
