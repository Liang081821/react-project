import mongoose from "mongoose";
import Blog from "./models/Blog.js";
import dotenv from "dotenv";
dotenv.config();

const uri = `mongodb+srv://Liang:${process.env.MONGONDB_PASSWORD}@cluster0.f3b1gm7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

async function main() {
  try {
    // 先連線資料庫
    await mongoose.connect(uri);
    console.log("✅ MongoDB 已連線");

    // 建立一筆文章
    const article = new Blog({
      title: "Awesome Post!",
      slug: "awesome-post",
      published: true,
      content: "This is the best post ever",
      tags: ["featured", "announcement"],
    });

    // 儲存文章
    await article.save();
    console.log("📝 文章已儲存");

    // 查詢文章
    const firstArticle = await Blog.findOne({});
    console.log("📄 查詢結果：", firstArticle);
  } catch (err) {
    console.error("❌ 發生錯誤：", err);
  } finally {
    // 結束連線（可以視情況保留）
    await mongoose.disconnect();
  }
}

main();
