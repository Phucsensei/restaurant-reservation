import express from "express";
import { query } from "./db";

const app = express();
const PORT = 4000;

app.use(express.json());

// API test: lấy tất cả reservations
app.get("/reservations", async (req, res) => {
  try {
    const result = await query("SELECT * FROM reservations");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Lỗi server");
  }
});

// API test: thêm 1 reservation
app.post("/reservations", async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await query(
      "INSERT INTO reservations (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Lỗi server");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
