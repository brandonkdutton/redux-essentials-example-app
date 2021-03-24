import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PostExcerpt } from "./PostExcerpt";
import { selectAllPosts, fetchPosts, selectPostIds } from "./postsSlice";

export const PostsList = () => {
  const dispatch = useDispatch();
  const postStatus = useSelector((store) => store.posts.status);
  const error = useSelector((store) => store.posts.error);
  const orderedPostIds = useSelector(selectPostIds);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (postStatus === "succeeded") {
    content = orderedPostIds.map((postId) => (
      <article className="post" key={postId}>
        <PostExcerpt postId={postId} />
      </article>
    ));
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  );
};
