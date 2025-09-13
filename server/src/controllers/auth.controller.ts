import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/jwt";
import { createUserService } from "../services/user.service";
import { findUserByEmail } from "../models/user.model";

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'your-access-token-secret';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'your-refresh-token-secret';

const ACCESS_TOKEN_EXPIRES_IN = '15m';  // 15 minutes
const REFRESH_TOKEN_EXPIRES_IN = '7d';  // 7 days

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email và password là bắt buộc." });
    }

    const user = await createUserService(email, password, role ?? "user");

    // Không trả password về client
    const { password: _, ...userSafe } = user;
    res.status(201).json({ message: "Created", user: userSafe });
  } catch (error: any) {
    console.error(error);
    res.status(error.status || 500).json({ message: error.message || "Register failed" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email và password là bắt buộc." });
    }

    const user = await findUserByEmail(email);
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const payload: JwtPayload = { 
      id: user.id, 
      email: user.email, 
      role: user.role 
    };

    const accessToken = jwt.sign(
      payload,
      ACCESS_TOKEN_SECRET,
      { expiresIn: ACCESS_TOKEN_EXPIRES_IN }
    );
    
    const refreshToken = jwt.sign(
      payload,
      REFRESH_TOKEN_SECRET,
      { expiresIn: REFRESH_TOKEN_EXPIRES_IN }
    );

    // Option: gửi refresh token trong httpOnly cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });

    // Trả access token cho client
    const { password: _, ...userSafe } = user;
    res.json({ message: "Login successful", accessToken, user: userSafe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed" });
  }
};

// Optional: refresh token endpoint
export const refreshToken = (req: Request, res: Response) => {
  try {
    const token = req.cookies?.refreshToken;
    if (!token) return res.status(401).json({ message: "No refresh token" });

    try {
      const payload = jwt.verify(token, REFRESH_TOKEN_SECRET) as JwtPayload;
      const newAccessToken = jwt.sign(
        { id: payload.id, email: payload.email, role: payload.role },
        ACCESS_TOKEN_SECRET,
        { expiresIn: ACCESS_TOKEN_EXPIRES_IN }
      );
      res.json({ accessToken: newAccessToken });
    } catch (err) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not refresh token" });
  }
};

export const logoutUser = (req: Request, res: Response) => {
  res.clearCookie("refreshToken");
  res.json({ message: "Logged out" });
};
