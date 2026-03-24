import express from 'express';
import { registerUserController, loginUserController, fetchAllUsersController, getSpecificUserController, } from '../controllers/student/authStudentsController.js';
import { deleteUser, findUserByEmail, getAllUsers } from '../model/userModel.js';
import { editUser } from '../model/userModel.js';
const router = express.Router();

// POST /api/auth/register
router.post('/user/register', registerUserController);
router.post('/user/login', loginUserController);
router.get('/users', fetchAllUsersController);
router.get('/user/me', getSpecificUserController);
router.post('/user/edit', editUser);
router.post('/user/delete', deleteUser)
export default router;