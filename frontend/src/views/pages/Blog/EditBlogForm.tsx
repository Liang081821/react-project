import CustomForm from "../../components/CustomForm";
import CustomDialog from "../../components/CustomDialog";
import { BlogItem } from "../../../models/Blog";
import useBlogStore from "../../../store/useBlogStore";
import useAlertStore from "../../../store/useAlertStore";
import { SubmitHandler, useForm } from "react-hook-form";
import { BlogFormData } from "../../../types/blogForm";
import useDialogStore from "../../../store/useDialogStore";

interface EditBlogFormProps {
  selectedBlog: BlogItem | null;
}

const EditBlogForm = ({ selectedBlog }: EditBlogFormProps) => {
  const updateBlog = useBlogStore((state) => state.updateBlog);
  const getBlogs = useBlogStore((state) => state.getBlogs);
  const showAlert = useAlertStore((state) => state.showAlert);
  const closeDialog = useDialogStore((state) => state.closeDialog);
  const { reset } = useForm<BlogFormData>();

  const onSubmit: SubmitHandler<BlogFormData> = async (data) => {
    try {
      await updateBlog(data.id, data); // 從 data 中拿 id
      closeDialog();
      showAlert("success", "You have edited this blog successfully!");
      await getBlogs();
      reset();
    } catch (error) {
      console.error("創建失敗", error);
      showAlert("error", "Some error occurs, please try again.");
    }
  };

  return (
    <CustomDialog
      content={
        <CustomForm
          title="編輯貼文"
          onSubmit={onSubmit}
          defaultValues={selectedBlog} // 只有這邊有抓出 defaultValues, 另一個 customForm 沒有
        />
      }
    ></CustomDialog>
  );
};

export default EditBlogForm;
