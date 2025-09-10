import { Pool } from "pg";

// Tạo pool kết nối tới PostgreSQL
const pool = new Pool({
  user: "postgres",       // thay bằng username của bạn
  host: "localhost",
  database: "restaurant_db", // tên database
  password: "123456",     // mật khẩu của user
  port: 5432,             // cổng mặc định
});

// Hàm query tiện lợi
export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};
