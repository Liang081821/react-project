import mongoose, { Schema, Document } from "mongoose";

// 定義 Blog 資料結構
interface IBlog extends Document {
  title: string;
  content: string;
  author: string;
}

// 建立 Blog Schema
const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// 創建 Blog model
const Blog = mongoose.model<IBlog>("Blog", blogSchema);

export default Blog;
