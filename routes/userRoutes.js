import { Router } from 'express';
import * as controllers from '../controllers/userControllers';

const router = Router();

// GET user
router.get('/users/:id', controllers.getUser);

// POST user
router.post('/users', controllers.postUser);

// UPDATE user
router.put('/users/:id', controllers.updateUser);

// DELETE user
router.delete('/users/:id', controllers.deleteUser);

export default userRoutes;

  

