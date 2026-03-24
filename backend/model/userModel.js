// models/userModel.js
import pool from '../db.js';
import bcrypt from 'bcryptjs';

// Find user by email, mao ni ang mangita through email adto sa database
export async function findUserByEmail(email) {
  const result = await pool.query(
    `SELECT id, full_name, email, password, created_at
     FROM users 
     WHERE email = $1`,
    [email]
  );

  

  console.log("DB RESULT:", result.rows[0]);
  return result.rows[0];
}

export const registerUser = async (req) => {
  const { first_name, last_name, email, password } = req.body;

  // Combine names
  const full_name = `${first_name} ${last_name}`;

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = `
    INSERT INTO users (email, password, full_name)
    VALUES ($1, $2, $3)
    RETURNING id, full_name, email, created_at;
  `;

  const values = [email, hashedPassword, full_name];

  const result = await pool.query(query, values);
  return result.rows[0];
};

export const loginUser = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) return null;
  const isMatch = await bcrypt.compare(password, user.password);
  return isMatch ? user : null;
}

export const getAllUsers = async () => {
  const result = await pool.query('SELECT id, full_name, email, created_at FROM users');
  return result.rows;
}

export const getSudentByEmail = async (email) => {
  try {
    const result = await pool.query(`
        SELECT * FROM users
        WHERE email = $1
        LIMIT 1;
      `, [email]);

    return result.rows[0];
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

// export const getSudentByFullname = async (fullName) => {
//   try {
//     const result = await pool.query(`
//         SELECT * FROM users
//         WHERE full_name = $1
//         LIMIT 1;
//       `,
//          [fullName]);

//     return result.rows[0];
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     })
//   }
// }

export const editUser = async (req, res) => {
  const { full_name, email, currentUser} = req.body;

  try {
    const user = await findUserByEmail(currentUser);
    if (!user) return res.status(404).json({message: "user not found"})
    const userId = user.id;

    const result = await pool.query(`
      UPDATE users
      SET full_name = $1, email = $2
      WHERE id = $3
      RETURNING full_name, email;
    `, [full_name, email, userId]);

    res.json({
      message: "User updated successfully",
      user: result.rows[0],
    });
  }

  catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

export const deleteUser = async (req, res) => {
  try {
    const {email} = req.body;

    await pool.query(`
      DELETE FROM users
      WHERE email = $1
      `, [email]);

    return res.json({
      message: "Account delete successfully!"
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    })
  }
}