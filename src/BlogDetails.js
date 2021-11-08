import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";
const BlogDetails = () => {
  let { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  let history = useHistory();
  let handleClickDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div> Loading... </div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title} </h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClickDelete}>Delete blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
