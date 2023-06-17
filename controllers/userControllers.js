import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
//GET all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET user
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the user" });
  }
};

// POST user
// export const postUser = async (req, res) => {
//     try {
//         const user = new User(req.body);
//         await user.save();
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(400).json({ error: 'Failed to create a new user' });
//     }
// };

//UPDATE
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Failed to update the user" });
  }
};
// DELETE
export const deleteUser = async (req, res) => {
  try {
    await User.findOneAndDelete(req.params.name);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: "Failed to delete the user" });
  }
};

/////////////////////////////////////////////////////////////

//GET specific manga favorites
// router.get("/users/favoite/manga/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     res.json(user);
//   } catch (error) {
//     res
//       .status(500)
//       .json({
//         error: "An error occurred while retrieving the manga from favorites",
//       });
//   }
// });

// // POST specific manga favorites
// router.post("/users/favoite/manga/:id", async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(400).json({ error: "Failed to create a manga onto favorites" });
//   }
// });
// // UPDATE specific manga favorites

// // UPDATE specific manga favorites
// router.put("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.json(user);
//   } catch (error) {
//     res
//       .status(400)
//       .json({ error: "Failed to update the manga from favorites" });
//   }
// });

// //DELETE specific manga favorites
// router.delete("/users/favoite/manga/:id", async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.sendStatus(204);
//   } catch (error) {
//     res
//       .status(400)
//       .json({ error: "Failed to delete the manga from favorites" });
//   }
// });

////////////////////////////////////////////////////////////////////////
// Authentication and jwt login and sign in

// Signup to creat a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password, verifyPassword } = req.body;
    // Check if the user already exists
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      verifyPassword: hashedPassword,
    });
    await newUser.save();

    res.json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//  User able to login in the profile
export const userSignin = async (req, res) => {
  try {
    const { name, password } = req.body;
    // Find the user by username
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(400).json({ error: "User Not Found" });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Password does not match" });
    }

    // Create and sign the JWT token
    const payload = { name: user.username };
    const token = jwt.sign(payload, process.env.SECRET_KEY);

    // Set the token as a cookie
    res.cookie("token", token, { httpOnly: true });

    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
