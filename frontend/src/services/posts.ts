import api from "../lib/axios";
import type { createPostType } from "../types/postType";
import type { loginData } from "../types/loginType";

export const getPosts = async () => {
  return await api.get("/posts/latest");
};

export const getPostBySlug = async (slug: string) => {
  return await api.get(`/posts/slug/${slug}`);
};

export const getPostById = async (id: number) => {
  return await api.get(`/posts/id/${id}`);
};

export const createPost = async (data: createPostType) => {
  return await api.post(`manage/resources`, data);
};

export const login = async (data: loginData) => {
  await api.post(`/manage/contacts`, data);
};

export const checkAuth = async () => {
  return await api.get(`/manage/check`);
};
