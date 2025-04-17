import CustomButton from "./CustomButton";

type InputSetter = (value: string) => void;

interface BlogFormProp {
  title: string;
  content: string;
  author: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  setAuthor: InputSetter;
  setContent: InputSetter;
  setTitle: InputSetter;
}

const BlogForm = (props: BlogFormProp) => {
  const { title, content, author, onSubmit, setAuthor, setContent, setTitle } =
    props;

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="border-1 flex flex-col items-center p-4"
      >
        <div className="flex justify-center gap-2 items-center">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
          />
        </div>

        <div className="flex justify-center gap-2 items-center">
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter blog content"
          />
        </div>

        <div className="flex justify-center gap-2 items-center">
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author's name"
          />
        </div>
        <CustomButton title={"Create Blog"} type="submit"></CustomButton>
      </form>
    </>
  );
};

export default BlogForm;
