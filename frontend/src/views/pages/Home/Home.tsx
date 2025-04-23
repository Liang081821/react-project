import { useState, useEffect } from "react";
import { createBlog } from "../../../services/blogServices";
import BlogForm from "../../components/BlogForm";
import BlogItem from "../../components/BlogItem";
import useBlogStore from "../../../store/useBlogStore";
import useAlertStore from "../../../store/useAlertStore";
import BlogList from "../../components/BlogList";

const Home = () => {
  // 用來儲存表單的狀態
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const blogs = useBlogStore((state) => state.blogs);
  const getBlogs = useBlogStore((state) => state.getBlogs);
  const showAlert = useAlertStore((state) => state.showAlert);

  useEffect(() => {
    getBlogs();
    console.log(blogs);
  }, []);

  // 表單提交處理
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 防止頁面重整

    // 驗證資料是否完整
    if (!title || !content || !author) {
      showAlert("warning", "Please fill the blank and submit again!");
      return;
    }

    try {
      const newBlog = {
        title,
        content,
        author,
      };
      const response = await createBlog(newBlog); // 呼叫 API
      showAlert("success", "You have created a blog successfully!");

      // 清空表單
      setTitle("");
      setContent("");
      setAuthor("");
    } catch (error) {
      console.error("創建失敗", error);
      showAlert("error", "Some error occurs, please try again.");
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

      <BlogList blogs={blogs}></BlogList>
    </div>
  );
};

export default Home;
// import React from "react";

// export default function InputTest() {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     console.log("🧠 整個事件物件 e：", e);
//     console.log("📍 e.target：", e.target);
//     console.log("✏️ e.target.value：", e.target.value);
//     console.log("🔠 e.type：", e.type);
//     console.log("💡 e.nativeEvent：", e.nativeEvent); // 原生事件也能看！
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <input type="text" placeholder="隨便打字看看" onChange={handleChange} />
//     </div>
//   );
// }
