import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import blogRoutes from "../src/routes/blogRoutes.js";

// 讀取 .env 配置
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// 中介軟體，讓 Express 可以處理 JSON 格式的請求體
app.use(express.json());

// 設定路由
app.use("/api/blogs", blogRoutes); // 這是你的文章路由

// Connect to MongoDB and start server
async function startServer() {
  try {
    const dbUrl = process.env.DATABASE_URL;

    // 檢查 DATABASE_URL 是否設定
    if (!dbUrl) {
      throw new Error(
        "❌ DATABASE_URL 尚未設定。請在 .env 文件中設定 MongoDB 連接字串。"
      );
    }

    // 連接 MongoDB
    await mongoose.connect(dbUrl);
    console.log("✅ 成功連線 MongoDB");

    // 啟動伺服器
    app.listen(port, () => {
      console.log(`🚀 伺服器已啟動：http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ 伺服器啟動失敗：", err);
  }
}

startServer();
