import { Router } from "express";
import * as controllers from "../controllers/userControllers.js";
import { isLoggedIn } from "../middleware/auth.js";

const router = Router();
//GET all users

router.get("/all", controllers.getAllUsers);
// GET user
router.get("/:name", controllers.getUser);

// UPDATE user
router.put("/update/:name", controllers.updateUser);

// DELETE user
router.delete("/delete/:name", controllers.deleteUser);

// POST to create a new user
router.post("/signup", controllers.createUser);

// Signin User
router.post("/signin", controllers.userSignin);

export default router;
export { controllers };
