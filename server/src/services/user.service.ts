import bcrypt from 'bcryptjs';
import { findUserByEmail } from '../models/user.model';
import { pool } from '../config/db';

export const createUserService = async (email: string, password: string, role: string = 'user') => {
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw { status: 400, message: 'Email already exists' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  
  const result = await pool.query(
    'INSERT INTO users (email, password, role) VALUES ($1, $2, $3) RETURNING id, email, role',
    [email, hashedPassword, role]
  );

  return result.rows[0];
};