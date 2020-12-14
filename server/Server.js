import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import middlewares from "./src/middlewares/Middlewares.js";
import Configuration from "./config/Configuration.js";
import UserRoutes from "./src/routes/User.routes.js";

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

if (process.env.node_ENV === "production")
  app.use(express.static("../client/build"));
//app.use(express.static("../client/build"));

UserRoutes.routes(app);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

Configuration.connectToDatabase();
Configuration.connectToPort(app);

export default app;
