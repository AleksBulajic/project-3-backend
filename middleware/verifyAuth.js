import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.SECRET_KEY;

export default function verifyAuth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "You must signin first.",
    });
  }

  try {
    const data = jwt.verify(token, secretKey);
    req.id = data.id;
    next();
  } catch (err) {
    console.error(`JWT verification error: ${err}`);
    return res.status(401).json({
      status: 401,
      message: "Invalid or expired token.",
    });
  }
}
