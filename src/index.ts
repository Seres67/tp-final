import express from "express";
import { config } from "dotenv";
import authRouter from "./routers/auth.router";
import movieRouter from "./routers/movie.router";

config();

import db from "../models/index";

const PORT = process.env.PORT || 4000;

//TODO: pas la meilleure méthode...
db.sync();

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/movies", movieRouter);

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
