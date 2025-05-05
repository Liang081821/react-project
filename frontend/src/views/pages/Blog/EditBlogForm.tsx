import CustomForm from "../../components/CustomForm";
import CustomDialog from "../../components/CustomDialog";
interface EditBlogFormProps {}
const EditBlogForm = ({}: EditBlogFormProps) => {
  return (
    <CustomDialog
      title="編輯貼文"
      content={<CustomForm onSubmit={() => console.log("here")} />}
    ></CustomDialog>
  );
};

export default EditBlogForm;
