import { useEffect } from "react";
import { createBlog } from "../../../services/blogServices";
import useBlogStore from "../../../store/useBlogStore";
import useAlertStore from "../../../store/useAlertStore";
import BlogList from "./BlogList";
import BlogDialog from "./BlogDialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { BlogFormData } from "../../../types/blogForm";
import useDialogStore from "../../../store/useDialogStore";
import dayjs from "dayjs";

const Home = () => {
  const blogs = useBlogStore((state) => state.blogs);
  const getBlogs = useBlogStore((state) => state.getBlogs);
  const showAlert = useAlertStore((state) => state.showAlert);
  const closeDialog = useDialogStore((state) => state.closeDialog);
  const { reset } = useForm<BlogFormData>();

  useEffect(() => {
    getBlogs();
  }, []);

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
        title: dayjs().format("YYYY/MM/DD"),
        content: data.content,
        author: "Liang", // #TODO:未來擴充
      };
      await createBlog(newBlog);
      closeDialog();
      showAlert("success", "You have created a blog successfully!");
      await getBlogs(); // 自動重新抓取

      reset();
    } catch (error) {
      console.error("創建失敗", error);
      showAlert("error", "Some error occurs, please try again.");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <BlogDialog onSubmit={onSubmit} />
      </div>

      <BlogList blogs={blogs}></BlogList>
    </div>
  );
};

export default Home;
