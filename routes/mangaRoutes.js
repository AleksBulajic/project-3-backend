import { Router } from "express";
import * as controllers from "../controllers/mangaControllers.js";
import verifyAuth from "../middleware/verifyAuth.js";

const router = Router();

//retrieve a list of all mangas
router.get("/all", controllers.getMangas);

//retrieve a specific manga by title
router.get("/title/:title", controllers.getMangaByTitle);

//retrieve a specific manga by id
router.get("/id/:id", controllers.getMangaById);

export default router;
