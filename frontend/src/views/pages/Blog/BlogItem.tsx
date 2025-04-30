import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import useBlogStore from "../../../store/useBlogStore";
import { Paper } from "@mui/material";
import MenuList from "@mui/material/MenuList";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useState } from "react";
import useAlertStore from "../../../store/useAlertStore";
interface BlogItemProps {
  id: string;
  title: string;
  author: string;
  content: string;
  createTime?: string;
}

const BlogItem = ({ id, title, author, content }: BlogItemProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const deleteBlogs = useBlogStore((state) => state.deleteBlogs);
  const showAlert = useAlertStore((state) => state.showAlert);
  const getBlogs = useBlogStore((state) => state.getBlogs);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBlogs(id);
      setOpen(false);
      await getBlogs();
      showAlert("success", "Delete post successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Card sx={{ width: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              L
            </Avatar>
          }
          action={
            <div className="relative">
              <IconButton
                aria-label="settings"
                onClick={() => setOpen((prev) => !prev)}
              >
                <MoreVertIcon />
              </IconButton>

              {open && (
                <ClickAwayListener onClickAway={handleClose}>
                  <Paper elevation={3} sx={{ position: "absolute", right: 0 }}>
                    <MenuList
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      sx={{
                        right: 0,
                      }}
                    >
                      <MenuItem onClick={handleClose}>Edit</MenuItem>
                      <MenuItem
                        onClick={() => handleDelete(id)}
                        sx={{ color: red[500] }}
                      >
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Paper>
                </ClickAwayListener>
              )}
            </div>
          }
          title={title}
          subheader={author}
        />

        {/* 
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        /> */}
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {content}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default BlogItem;
