import React from "react";
import { CommentType } from "../../lib/types/commentType";

type Props = {
  comment: CommentType;
};

const Comment: React.FC<Props> = ({ comment }) => {
  return <div>{comment.author.username}</div>;
};

export default Comment;
