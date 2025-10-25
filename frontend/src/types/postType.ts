export type post = {
  id: number;
  slug: string;
  title: string;
  content: object;
  author: string;
  description: string;
  createdAt: string;
  themes: string[];
};

export type createPostType = {
  slug: string;
  title: string;
  content: object;
  author: string;
  description: string;
  themes: string[];
};
