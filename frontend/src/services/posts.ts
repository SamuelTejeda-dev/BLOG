import api from "../lib/axios";

type post = {
  slug: string;
  title: string;
  content: Object;
  author: string;
};

//export const getPosts = () => api.get("/posts");
export const getPostBySlug = (slug: string) => api.get(`/post/${slug}`);
export const createPost = (data: post) => api.post("/admin", data);
//Da implementare
//export const deletePost = (id: string) => api.delete(`/posts/${id}`);
