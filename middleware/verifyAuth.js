import jwt from "jsonwebtoken";
// import * as dotenv from "dotenv";

// dotenv.config();
const secretKey = process.env.SECRET_KEY;

export default async function verifyAuth(req, res, next) {
  // console.log("REQ HEADERS AUTH 1:" + req.headers.authorization);
  // if (!req.headers.authorization) {
  //   return res.status(401).json({
  //     status: 401,
  //     message: "You must signin first.",
  //   });
  // }
  try {
    // const data = jwt.verify(token, secretKey);

    // console.log(data);
    // next();
    res.status(200).json({
      token: req.headers.authorization,
    });
  } catch (err) {
    console.log(`Message from verifyAuth: ${err}`);
  }
}
