import express from "express";
import {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

const router = express.Router();

// 設定路由對應的處理函數 >> 前端用什麼方法、路徑會對應到這裡，然後丟給 controller 處理

// 創建新文章
router.post("/", createBlog);

// 查詢所有文章
router.get("/", getBlogs);

// // 更新指定文章
// router.put("/:id", updateBlog);

// 刪除指定文章
router.delete("/:id", deleteBlog);

export default router;
