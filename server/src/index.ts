// index.ts (root)
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// routes
import authRoutes from "./routes/auth.routes";
import tableRoutes from "./routes/table.routes";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3001;

app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tables", tableRoutes);

app.listen(port, () => {
  console.log(`🚀 Server chạy tại http://localhost:${port}`);
});
