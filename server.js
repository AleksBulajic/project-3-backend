import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import db from "./db/dbConnect.js";
// import mangaSeed from "./db/dbSeedJSON.js";
import userRoutes from "./routes/userRoutes.js";
import mangaRoutes from "./routes/mangaRoutes.js";
import favoriteRoutes from "./routes/favoriteRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import cookieParser from "cookie-parser";
import morgan from "morgan";
import verifyAuth from "./middleware/verifyAuth.js";


dotenv.config();

const app = express();
app.use(cookieParser());

app.use(cors());
app.use(express.json());

app.use(morgan('tiny'));

const PORT = process.env.PORT || 3000;

// mangaSeed();

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Error handling middleware for parsing errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError) {
    console.error(
      `Error parsing the body of ${req.method} request for ${req.url}`
    );
  }
  next(err);
});

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: false }));

app.use("/mangas", mangaRoutes);
app.use("/users", userRoutes);
app.use("/favorites", favoriteRoutes);
app.use("/auth", authRoutes)


app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}!`);
});
