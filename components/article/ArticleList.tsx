import React from "react";
import useSWR from "swr";
import { usePageState } from "../../lib/context/PageContext";
import { ArticleType } from "../../lib/types/articleTypes";
import { DEFAULT_LIMIT, SERVER_BASE_URL } from "../../lib/utils/constant";
import fetcher from "../../lib/utils/fetcher";
import ErrorMessage from "../common/ErrorMessage";
import LoadingSpinner from "../common/LoadingSpinner";
import ArticlePreview from "./ArticlePreview";

const ArticleList: React.FC = () => {
  const page = usePageState();
  //   let fetchURL = `${SERVER_BASE_URL}/articles?offset=${page * DEFAULT_LIMIT}`;
  let fetchURL = `${SERVER_BASE_URL}/articles`;

  const { data, error } = useSWR(fetchURL, fetcher);
  if (error) {
    return (
      <div>
        <ErrorMessage message="Cannot load articles" />
      </div>
    );
  }
  if (!data) return <LoadingSpinner />;

  const { articles, articlesCount } = data;

  if (articles && articles.length === 0) {
    return <div>No articles are here</div>;
  }

  console.log(articles);

  // Function component返却
  return (
    <>
      {articles.map((article: any) => {
        return <ArticlePreview key={article.slug} article={article} />;
      })}
    </>
  );
};

export default ArticleList;
