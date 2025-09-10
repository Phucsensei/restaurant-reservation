import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import cookieParser from "cookie-parser";
import { query } from "./db";
import authRoutes from "./routes/auth";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);


app.listen(port, () => {
  console.log(`🚀 Server chạy tại http://localhost:${port}`);
});
