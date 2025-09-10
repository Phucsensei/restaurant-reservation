import pool from "../db";

interface User {
  id?: number;
  email: string;
  password: string;
}

export const createUser = async (user: User) => {
  const { email, password } = user;
  const result = await pool.query(
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
    [email, password]
  );
  return result.rows[0];
};

export const findUserByEmail = async (email: string) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0];
};


