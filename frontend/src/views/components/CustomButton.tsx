import Button from "@mui/material/Button";
import { ButtonType } from "../../types/button";

interface ButtonProps {
  title: string;
  type: ButtonType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton = (props: ButtonProps) => {
  const { title, type, onClick } = props;

  return (
    <>
      <Button
        onClick={onClick}
        type={type}
        fullWidth
        sx={{
          backgroundColor: "var(--color-primary)",
          color: "white",
          "&:hover": {
            backgroundColor: "var(--color-dark)",
          },
        }}
      >
        {title}
      </Button>
    </>
  );
};
export default CustomButton;
