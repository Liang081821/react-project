import CustomForm from "../../components/CustomForm";
import { SubmitHandler } from "react-hook-form";
import { BlogFormData } from "../../../types/blogForm";

interface BlogFormProp {
  onSubmit: SubmitHandler<BlogFormData>;
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
