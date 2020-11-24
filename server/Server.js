import express, { response } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import middlewares from "./src/middlewares/Middlewares.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(helmet());
app.use(morgan("common"));

app.get("/painting", (req, res) => {
  res.send("painting");
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

mongoose
  .connect("mongodb://localhost/nfgdatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Succesfully connected to the database!!!!"))
  .catch((error) => {
    console.log("ERROR WILE TRYING wTO CONNECT TO THE DATABASE: ", error);
    process.exit();
  });

app.listen(port, () => {
  console.log(`servern är igång på portdd 3002 ${port}`);
});
