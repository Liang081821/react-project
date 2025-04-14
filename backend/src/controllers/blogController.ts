import Blog from "../models/Blog.js"; // 引入 Blog 模型
import { Request, Response } from "express";

// 創建新文章
export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, content, author } = req.body;
    const newBlog = new Blog({ title, content, author });
    const savedBlog = await newBlog.save(); // 儲存新文章
    res.status(201).json(savedBlog); // 回傳創建的文章
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    }
  }
};

// 查詢所有文章
export const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find(); // 查詢所有 Blog 文章
    res.json(blogs); // 回傳文章列表
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    }
  }
};

// 更新指定文章
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { title, content, author } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, content, author },
      { new: true } // 回傳更新後的資料
    );
    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(updatedBlog); // 回傳更新後的文章
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    }
  }
};

// 刪除指定文章
export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id); // 刪除文章
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" }); // 回傳成功刪除訊息
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    }
  }
};
