import { create } from "zustand";
import { getBlogs } from "../services/blogServices";
import { BlogItem } from "../models/Blog";
// import { immer } from "zustand/middleware/immer";

// 描述這個 store 裡面有什麼方法及屬性
interface BlogState {
  getBlogs: () => Promise<void>;
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
}));

export default useBlogStore;
