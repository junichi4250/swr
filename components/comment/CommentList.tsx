import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { CommentType } from "../../lib/types/commentType";
import { SERVER_BASE_URL } from "../../lib/utils/constant";
import fetcher from "../../lib/utils/fetcher";
import ErrorMessage from "../common/ErrorMessage";
import LoadingSpinner from "../common/LoadingSpinner";
import Comment from "./Comment";

const CommentList: React.FC = () => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;

  const { data, error } = useSWR(
    `${SERVER_BASE_URL}/articles/${pid}/comments`,
    fetcher
  );
  if (error) {
    return (
      <div>
        <ErrorMessage message="Cannot load comments" />
      </div>
    );
  }
  if (!data) return <LoadingSpinner />;

  const { comments } = data;

  return (
    <div>
      {comments.map((comment: CommentType) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
