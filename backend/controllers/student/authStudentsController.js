import pool from "../../db.js";
import { registerUser, loginUser, getAllUsers, findUserByEmail } from "../../model/userModel.js";

export const fetchAllUsersController = async (req, res) => {
    try {
        const users = await getAllUsers();  
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

// mao ni ang mo call sa api
export const registerUserController = async (req, res) => {
    try {
        const newUser = await registerUser(req);

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "You already have account" });
    }
}

export const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful", user });
        localStorage.setItem("email", email);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }   
}

export const getSpecificUserController = async (req, res) => {
    try {  
        const { email } = req.body;
        const result = await pool.query(
            `SELECT id, full_name, email, password, created_at
            FROM users
            WHERE email = $1`
            [email]
        );

  console.log("DB RESULT:", result.rows[0]);
  res.json({
    data: result.rows[0],
  })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}
