import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reactionAdded, selectPostById } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};

export const ReactionButtons = ({ postId }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => selectPostById(state, postId));

  const onReactionButtonClicked = (emojiName) => {
    dispatch(
      reactionAdded({
        postId: postId,
        reaction: emojiName,
      })
    );
  };

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="muted-button reaction-button"
        onClick={() => onReactionButtonClicked(name)}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
};
