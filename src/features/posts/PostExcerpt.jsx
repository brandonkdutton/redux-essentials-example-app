import React from "react";
import { Link } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";

let PostExcerpt = ({ post }) => {
  return (
    <>
      <h2>{post.title}</h2>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
      <p className="post-content">{post.content}</p>
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button">
        View Post
      </Link>
    </>
  );
};

PostExcerpt = React.memo(PostExcerpt);
export { PostExcerpt };
