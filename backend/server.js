// import express from "express"


// const app = express();

// const PORT = process.env.PORT || 8080;

// app.use('/testing', (req, res) => {
//     res.send('testing please work');
// });

// app.get("/", (req, res) => {
//     res.send("Hello from the backend!");
// });


// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// server.js
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import authRoutes from "./router/auth.js";
import pool from './db.js';
import userRoutes from './router/userRoutes.js';

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Register backend running'));

app.use('/api/auth', authRoutes);

// global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error', err);
  res.status(500).json({ message: 'Server error' });
});

app.use('/api', userRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

