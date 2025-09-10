import express from "express";
import { registerUser, loginUser } from "../controllers/authControllers";

const router = express.Router();

// route đăng ký
router.post("/register", registerUser);
// route đăng nhập
router.post("/login", loginUser);


export default router;
