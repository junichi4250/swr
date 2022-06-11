export interface Article {
  article: ArticleType;
}

export type ArticleType = {
  tagList: string[];
  title: string;
  author: Author;
  description: string;
  body: string;
  slug: string;
  createdAt: number;
  updatedAt: number;
  favoritesCount: number;
  favorited: boolean;
};

export type Author = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};
