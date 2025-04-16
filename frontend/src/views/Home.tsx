import { useState, useEffect } from "react";
import { createBlog } from "../services/blogServices";
import BlogForm from "./components/BlogForm";
import useBlogStore from "../store/useBlogStore";

const Home = () => {
  // 用來儲存表單的狀態
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const blogs = useBlogStore((state) => state.blogs);
  const getBlogs = useBlogStore((state) => state.getBlogs);

  useEffect(() => {
    getBlogs();
    console.log(blogs);
  }, []);

  // 表單提交處理
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 防止頁面重整

    // 驗證資料是否完整
    if (!title || !content || !author) {
      alert("請填寫完整的資料");
      return;
    }

    try {
      const newBlog = {
        title,
        content,
        author,
      };
      const response = await createBlog(newBlog); // 呼叫 API
      console.log("創建成功", response);

      // 清空表單
      setTitle("");
      setContent("");
      setAuthor("");
    } catch (error) {
      console.error("創建失敗", error);
      alert("創建文章失敗，請稍後再試");
    }
  };

  return (
    <div>
      <div className="border-1 flex flex-col items-center">
        <h2>Create New Blog</h2>
        <BlogForm
          onSubmit={handleSubmit}
          title={title}
          content={content}
          author={author}
          setAuthor={setAuthor}
          setContent={setContent}
          setTitle={setTitle}
        />
      </div>
      <h2>Blog List</h2>
      <div className="border-1">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.title} className="border-1 text-center">
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
              <p>
                <strong>{blog.author}</strong>
              </p>
            </div>
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
