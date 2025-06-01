import api from "../lib/axios";

type post = {
  slug: string;
  title: string;
  content: Object;
  author: string;
};

//export const getPosts = () => api.get("/posts");
export const getPostBySlug = async (slug: string) =>
  await api.get(`/posts/${slug}`);
export const createPost = async (data: post) =>
  await api.post(`manage/resources`, data);
export const login = async (data: any) => {
  await api.post(`/manage/contacts`, data);
};
