import BlogItem from "./BlogItem";
import { Grid } from "@mui/material";
import { BlogItem as IBlogItem } from "../../../models/Blog";
import EditBlogForm from "./EditBlogForm";
import useDialogStore from "../../../store/useDialogStore";
import { useState } from "react";

interface BlogListProps {
  blogs: IBlogItem[];
}

const BlogList = ({ blogs }: BlogListProps) => {
  const { dialogType } = useDialogStore();
  const [selectedBlog, setSelectedBlog] = useState<IBlogItem | null>(null);

  return (
    <>
      <Grid
        container
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {blogs.length > 0 ? (
          [...blogs]
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((blog) => (
              <Grid key={blog._id}>
                <BlogItem blog={blog} setSelectedBlog={setSelectedBlog} />
              </Grid>
            ))
        ) : (
          <p>No blogs available</p>
        )}
      </Grid>
      {dialogType === "edit" && <EditBlogForm selectedBlog={selectedBlog} />}
    </>
  );
};
export default BlogList;
