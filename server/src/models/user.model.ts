import { pool } from '../config/db';

export interface User {
  id: number;
  email: string;
  password: string;
  role: string;
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const result = await pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  return result.rows[0] || null;
};