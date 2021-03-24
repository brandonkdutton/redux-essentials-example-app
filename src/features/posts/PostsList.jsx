import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PostExcerpt } from "./PostExcerpt";
import { selectAllPosts, fetchPosts } from "./postsSlice";

export const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();
  const postStatus = useSelector((store) => store.posts.status);
  const error = useSelector((store) => store.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts.slice();
    orderedPosts.sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <article className="post" key={post.id}>
        <PostExcerpt post={post} />
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
