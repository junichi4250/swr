import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { usePageDispatch, usePageState } from "../../lib/context/PageContext";
import {
  usePageCountDispatch,
  usePageCountState,
} from "../../lib/context/PageCountContext";
import useViewport from "../../lib/hooks/useViewport";
import { ArticleType } from "../../lib/types/articleTypes";
import { DEFAULT_LIMIT, SERVER_BASE_URL } from "../../lib/utils/constant";
import fetcher from "../../lib/utils/fetcher";
import ErrorMessage from "../common/ErrorMessage";
import LoadingSpinner from "../common/LoadingSpinner";
import ArticlePreview from "./ArticlePreview";

const ArticleList: React.FC = () => {
  // context
  const page = usePageState();
  const pagecount = usePageCountState();
  const setPageCount = usePageCountDispatch();

  // viewport
  const { vw } = useViewport();
  const router = useRouter();

  //   let fetchURL = `${SERVER_BASE_URL}/articles?offset=${page * DEFAULT_LIMIT}`;
  // データを取れるようにページネーションを外している
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
  // setPageCount(articlesCount);

  // 記事件数が0件
  if (articles && articles.length === 0) {
    return <div>No articles are here</div>;
  }

  // Function component返却
  return (
    <>
      {articles.map((article: ArticleType) => {
        return <ArticlePreview key={article.slug} article={article} />;
      })}
    </>
  );
};

export default ArticleList;
