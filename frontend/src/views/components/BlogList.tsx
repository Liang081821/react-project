import BlogItem from "./BlogItem";
import { Grid } from "@mui/material";
import { BlogItem as IBlogItem } from "../../models/Blog";
interface BlogListProps {
  blogs: IBlogItem[];
}

const BlogList = ({ blogs }: BlogListProps) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <Grid>
            <BlogItem
              title={blog.title}
              content={blog.content}
              author={blog.author}
            ></BlogItem>
          </Grid>
        ))
      ) : (
        <p>No blogs available</p>
      )}
    </Grid>
  );
};
export default BlogList;
