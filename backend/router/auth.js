// routes/auth.js
import express from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findUserByEmail } from '../model/userModel.js';

const router = express.Router();
const SALT_ROUNDS = 12;

// POST /api/auth/register
router.post(
  '/register',
  [
    body('first_name').trim().notEmpty().withMessage('First name required'),
    body('last_name').trim().notEmpty().withMessage('Last name required'),
    body('email').isEmail().withMessage('Valid email required').normalizeEmail(),
    body('password')
      .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
      .matches(/[0-9]/).withMessage('Password must contain a number')
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

      const { first_name, last_name, email, password } = req.body;

      const existing = await findUserByEmail(email);
      if (existing) return res.status(409).json({ message: 'Email already registered' });

      const password_hash = await bcrypt.hash(password, SALT_ROUNDS);
      const user = await createUser({ first_name, last_name, email, password_hash });

      // Optionally return a token
      const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });

      res.status(201).json({ user: { id: user.id, first_name: user.first_name, last_name: user.last_name, email: user.email }, token });
    } catch (err) {
      console.error('Register error', err);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// POST /api/auth/login
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email required').normalizeEmail(),
    body('password').notEmpty().withMessage('Password required')  
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

      const { email, password } = req.body;
      const user = await findUserByEmail(email);
      if (!user) return res.status(401).json({ message: 'Invalid credentials' });

      const match = await bcrypt.compare(password, user.password_hash);
      if (!match) return res.status(401).json({ message: 'Invalid credentials' });

      const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });

      res.json({ token, user: { id: user.id, first_name: user.first_name, last_name: user.last_name, email: user.email } });
    } catch (err) {
      console.error('Login error', err);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

export default router;
