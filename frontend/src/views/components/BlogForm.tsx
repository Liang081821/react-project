import CustomForm from "./CustomForm";
import { SubmitHandler } from "react-hook-form";
import { BlogFormData } from "../../types/blogForm";

type InputSetter = (value: string) => void;

interface BlogFormProp {
  title: string;
  content: string;
  author: string;
  onSubmit: SubmitHandler<BlogFormData>;
  setAuthor: InputSetter;
  setContent: InputSetter;
  setTitle: InputSetter;
}

const BlogForm = (props: BlogFormProp) => {
  const { onSubmit } = props;

  return (
    <>
      <CustomForm onSubmit={onSubmit}></CustomForm>
    </>
  );
};

export default BlogForm;
