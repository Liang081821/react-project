import Button from "@mui/material/Button";
import { ButtonType } from "../../types/button";

interface ButtonProps {
  title: string;
  type: ButtonType;
}

const CustomButton = (props: ButtonProps) => {
  const { title, type } = props;

  return (
    <>
      <Button
        type={type}
        sx={{
          backgroundColor: "var(--color-primary)",
          color: "white",
          "&:hover": {
            backgroundColor: "var(--color-dark)",
          },
        }}
        disableElevation
      >
        {title}
      </Button>
    </>
  );
};
export default CustomButton;
