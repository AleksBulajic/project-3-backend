// authMiddleware.js
import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;


export default async function verifyAuth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({
      status: 401,
      message: "You must signin first.",
    });
  }

  try {
    const token = req.headers.authorization;
    const data = jwt.verify(token, secretKey);

    return next();
  } catch (err) {
    console.log(`Message from verifyAuth: ${err}`);
    return res.status(401).json({
      status: 401,
      message: "Invalid token.",
    });
  }
}

