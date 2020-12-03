import Axios from "axios";

const UserAPI = Axios.create({
  baseURL: "http://localhost:3006/user",
});

export default UserAPI;
