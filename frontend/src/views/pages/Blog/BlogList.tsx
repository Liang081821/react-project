import BlogItem from "./BlogItem";
import { Grid } from "@mui/material";
import { BlogItem as IBlogItem } from "../../../models/Blog";
interface BlogListProps {
  blogs: IBlogItem[];
}

const BlogList = ({ blogs }: BlogListProps) => {
  return (
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
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .map((blog) => (
            <Grid key={blog._id}>
              <BlogItem
                id={blog._id}
                title={blog.title}
                content={blog.content}
                author={blog.author}
              />
            </Grid>
          ))
      ) : (
        <p>No blogs available</p>
      )}
    </Grid>
  );
};
export default BlogList;
