
import { Router } from "express";
import verifyAuth from "../middleware/verifyAuth.js";

const router = Router();

router.get('/isTokenValid', verifyAuth, async (req, res) => {
    try {
      // TODO Check in DB if the user is valid as an additional check
      if (req.id) {
        res.status(200).json({
          valid: true,
          status: 200,
          message: "Token is valid"
        })
      }
    } catch (error) {
      res.status(400).json({
        valid: false,
        status: 400,
        error: `Token is invalid`,
        database_message: error.message,
      })
    }
  })

  export default router;