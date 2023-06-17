import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

// Middleware for authorization (making sure they are signed in)
const isLoggedIn = async (req, res, next) => {
  try {
    // Check if auth header exists
    if (req.cookies.token) {
      // Parse token from header
      const token = req.cookies.token;
      if (token) {
        const payload = await jwt.verify(token, process.env.SECRET_KEY);
        if (payload) {
          // Store userdata in request object
          req.user = payload;
          console.log(req.user);
          next();
        } else {
          res.status(400).json({ error: 'token verification failed' });
        }
      } else {
        res.status(400).json({ error: 'malformed auth header' });
      }
    } else {
      res.status(400).json({ error: 'no authorization header' });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Export custom middleware
export { isLoggedIn };
