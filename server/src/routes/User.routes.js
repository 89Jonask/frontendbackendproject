import UserController from "../controllers/User.controller.js";

const routes = (app) => {
  app.post("/user", UserController.createUser);
  app.get("/user", UserController.getAllUsers);
  app.get("/user/:userId", UserController.getUserWithId);
  app.get("/user", UserController.getUserWithUsernameQuery);
  app.put("/edituser/:userId", UserController.updateUser);
  app.delete("/user/:userId", UserController.deleteUser);
  app.delete("/user", UserController.deleteAllUsers);
};

export default {
  routes,
};
