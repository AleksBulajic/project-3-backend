import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import db from "./db/dbConnect.js";

dotenv.config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}!`);
});
