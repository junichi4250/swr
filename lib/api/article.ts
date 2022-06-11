import axios from "axios";
import { SERVER_BASE_URL } from "../utils/constant";
import { getQuery } from "../utils/getQuery";

const ArticleAPI = {
  all: (page: number, limit: number = 10) => {
    axios.get(`${SERVER_BASE_URL}/articles?${getQuery(limit, page)}`);
  },

  get: (slug: string) => axios.get(`${SERVER_BASE_URL}/articles/${slug}`),
};

export default ArticleAPI;
