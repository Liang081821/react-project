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
      <CustomForm onSubmit={onSubmit} title="建立貼文"></CustomForm>
    </>
  );
};

export default BlogForm;
