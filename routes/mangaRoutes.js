import { Router } from "express";
import * as controllers from "../controllers/mangaControllers.js";
import verifyAuth from "../middleware/verifyAuth.js";

const router = Router();

//retrieve a list of all mangas
router.get("/all", controllers.getMangas, verifyAuth);

//retrieve a specific manga by title
router.get("/title/:title", controllers.getMangaByTitle, verifyAuth);

//retrieve a specific manga by id
router.get("id/:id", controllers.getMangaById, verifyAuth);

export default router;
