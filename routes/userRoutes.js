import { Router } from "express";
import * as controllers from "../controllers/userControllers.js";
import verifyAuth from "../middleware/verifyAuth.js";


const router = Router();
//GET all users

router.get("/all", verifyAuth, controllers.getAllUsers);
// GET user
router.get("/:name", controllers.getUser);

// UPDATE user
router.put("/update/:name", verifyAuth, controllers.updateUser);

// DELETE user
router.delete("/delete/:name", verifyAuth, controllers.deleteUser);

// POST to create a new user
router.post("/signup", controllers.createUser);

// Signin User
router.post("/signin", controllers.userSignin);

export default router;
export { controllers };
