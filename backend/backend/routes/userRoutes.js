import express from 'express';
const router = express.Router();
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  deleteUserById,
  getUserById,
  updateUserById,
} from '../controllers/userController.js';
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js';

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/logout', authenticate, logoutCurrentUser);
router.get('/profile', authenticate, getCurrentUserProfile);
router.put('/profile', authenticate, updateCurrentUserProfile);
router.get('/:id', authenticate, authorizeAdmin, getUserById);
router.put('/:id', authenticate, authorizeAdmin, updateUserById);
router.delete('/:id', authenticate, authorizeAdmin, deleteUserById);
router.get('/', authenticate, authorizeAdmin, getAllUsers);

export default router;
