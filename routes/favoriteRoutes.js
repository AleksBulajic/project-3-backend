import { Router } from "express";
import * as controllers from "../controllers/favoriteControllers.js";
import * as dotenv from "dotenv";

dotenv.config();

const router = Router();

router.get("/manga", controllers.getAllFavorites);

router.get("/manga/:id", controllers.getFavorites);

router.post("/add/manga/:id", controllers.addFavoriteManga);

router.put("/update/manga/:id", controllers.updateFavorite);

router.delete("/manga/:id", controllers.deleteFavorite);

export default router;
