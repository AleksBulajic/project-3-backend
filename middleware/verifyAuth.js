import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.SECRET_KEY;

export default async function verifyAuth(req, res, next) {
  const token = await req.headers.authorization;
  // console.log("REQ HEADERS AUTH 1:" + req.headers.authorization);
  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "You must signin first.",
    });
  }
    try{
      const data = jwt.verify(token, secretKey);
      req.id = data.id;
      next();
    }
    catch(err){
      console.log(err);
    }
  
}
