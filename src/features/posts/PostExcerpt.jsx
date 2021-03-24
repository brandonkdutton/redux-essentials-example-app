import React from "react";
import { Link } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

let PostExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  return (
    <>
      <h2>{post.title}</h2>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
      <p className="post-content">{post.content}</p>
      <ReactionButtons postId={post.id} />
      <Link to={`/posts/${post.id}`} className="button">
        View Post
      </Link>
    </>
  );
};

PostExcerpt = React.memo(PostExcerpt);
export { PostExcerpt };
