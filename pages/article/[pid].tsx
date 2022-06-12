import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import CommentList from "../../components/comment/CommentList";
import ArticleAPI from "../../lib/api/article";
import { Article } from "../../lib/types/articleTypes";
import { SERVER_BASE_URL } from "../../lib/utils/constant";
import fetcher from "../../lib/utils/fetcher";

const ArticlePage = (initialArticle: Article) => {
  const router = useRouter();
  const {
    query: { pid },
  } = router;

  const { data: fetchedArticle } = useSWR(
    `${SERVER_BASE_URL}/articles/${encodeURIComponent(String(pid))}`,
    fetcher
    // { initialData: initialArticle }
  );

  const { article }: Article = fetchedArticle || initialArticle;

  return (
    <>
      <div>{article.title}</div>
      <div>
        <CommentList />
      </div>
    </>
  );
};

ArticlePage.getInitialProps = async ({ query: { pid } }: any) => {
  const { data } = await ArticleAPI.get(pid);
  return data;
};

export default ArticlePage;
