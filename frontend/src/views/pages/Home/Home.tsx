import { useState, useEffect } from "react";
import { createBlog } from "../../../services/blogServices";
import BlogForm from "../../components/BlogForm";
import useBlogStore from "../../../store/useBlogStore";
import useAlertStore from "../../../store/useAlertStore";
import BlogList from "../../components/BlogList";
import CreateBlog from "./CreateBlog";
import { SubmitHandler, useForm } from "react-hook-form";
import { BlogFormData } from "../../../types/blogForm";
import useDialogStore from "../../../store/useDialogStore";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const blogs = useBlogStore((state) => state.blogs);
  const getBlogs = useBlogStore((state) => state.getBlogs);
  const showAlert = useAlertStore((state) => state.showAlert);
  const closeDialog = useDialogStore((state) => state.closeDialog);
  const { reset } = useForm<BlogFormData>();

  useEffect(() => {
    getBlogs();
    console.log(blogs);
  }, []);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!title || !content || !author) {
  //     showAlert("warning", "Please fill the blank and submit again!");
  //     return;
  //   }

  //   try {
  //     const newBlog = {
  //       title,
  //       content,
  //       author,
  //     };
  //     await createBlog(newBlog);
  //     showAlert("success", "You have created a blog successfully!");
  //     await getBlogs();

  //     setTitle("");
  //     setContent("");
  //     setAuthor("");
  //   } catch (error) {
  //     console.error("創建失敗", error);
  //     showAlert("error", "Some error occurs, please try again.");
  //   }
  // };

  const onSubmit: SubmitHandler<BlogFormData> = async (data) => {
    // data 已經包含 title、content、author
    try {
      const newBlog = {
        title: "你好",
        content: data.content,
        author: "你好",
      };
      await createBlog(newBlog);
      closeDialog();
      showAlert("success", "You have created a blog successfully!");
      await getBlogs();

      reset();
    } catch (error) {
      console.error("創建失敗", error);
      showAlert("error", "Some error occurs, please try again.");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <CreateBlog
          onSubmit={onSubmit}
          title={title}
          content={content}
          author={author}
          setAuthor={setAuthor}
          setContent={setContent}
          setTitle={setTitle}
        />
        {/* <BlogForm
          onSubmit={handleSubmit}
          title={title}
          content={content}
          author={author}
          setAuthor={setAuthor}
          setContent={setContent}
          setTitle={setTitle}
        /> */}
      </div>

      <BlogList blogs={blogs}></BlogList>
    </div>
  );
};

export default Home;
