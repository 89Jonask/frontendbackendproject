import http from "../UserAPI";

const searchForUser = (userSearch) => {
  return http.get(`/${userSearch}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  searchForUser,
};
