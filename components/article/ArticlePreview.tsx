import React, { useState } from "react";
import { ArticleType } from "../../lib/types/articleTypes";

type Props = {
  article: ArticleType;
};

const ArticlePreview: React.FC<Props> = ({ article }) => {
  const [preview, setPreview] = useState(article);
  return <div>{preview.author.username}</div>;
};

export default ArticlePreview;
