import express from 'express';
import { RegisterUser,LoginUser,GetAllUsers,GetUserByEmail,GetUserById } from '../controller/RegisterUser.controller.js';

const router = express.Router();
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();        
// Register a new user
router.post('/register', RegisterUser);
router.post('/login',LoginUser);
router.get('/', GetAllUsers);             // GET all users
router.get('/:id', GetUserById);          // GET user by ID
router.get('/email', GetUserByEmail);         // GET user by Email
// Login a user
export default router;
