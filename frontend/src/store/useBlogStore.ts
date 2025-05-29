import { create } from "zustand";
import { getBlogs, deleteBlog, updateBlogs } from "../services/blogServices";
import { BlogItem } from "../models/Blog";
import { BlogFormData } from "../types/blogForm";
// import { immer } from "zustand/middleware/immer";

// 描述這個 store 裡面有什麼方法及屬性
interface BlogState {
  getBlogs: () => Promise<void>;
  deleteBlogs: (id: string) => Promise<void>;
  updateBlog: (id: string, data: BlogFormData) => Promise<void>;
  blogs: BlogItem[];
}

const useBlogStore = create<BlogState>((set) => ({
  // BlogState 是這個 store 的類型
  blogs: [],
  getBlogs: async () => {
    try {
      const response = await getBlogs();
      set({ blogs: response });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },
  deleteBlogs: async (id) => {
    try {
      await deleteBlog(id);
    } catch (error) {
      console.error(error);
    }
  },

  updateBlog: async (id, data) => {
    try {
      await updateBlogs(id, data);
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useBlogStore;
