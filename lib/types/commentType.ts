export interface Comments {
  comments: CommentType[];
}

export type CommentType = {
  id: string;
  body: string;
  slug: string;
  author: Author;
  createdAt: number;
  updatedAt: number;
};

export type Author = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};
