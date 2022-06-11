import React, { useState } from "react";
import { ArticleType } from "../../lib/types/articleTypes";
import CustomLink from "../common/CustomLink";

type Props = {
  article: ArticleType;
};

const ArticlePreview: React.FC<Props> = ({ article }) => {
  const [preview, setPreview] = useState(article);
  return (
    <div>
      <CustomLink href="/article/[pid]" as={`/article/${preview.slug}`}>
        {preview.author.username}
      </CustomLink>
    </div>
  );
};

export default ArticlePreview;
