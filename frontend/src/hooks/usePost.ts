import { useQuery } from "@tanstack/react-query";
import { getPostById, getPostBySlug, getPosts } from "../services/posts";

export const POST = "POST";

export const useGetPosts = () => {
  return useQuery({
    queryKey: [POST],
    queryFn: async () => {
      const response = await getPosts();
      return response.data;
    },
  });
};

export const useGetPostBySlug = (slug: string) => {
  return useQuery({
    queryKey: [POST, slug],
    queryFn: async () => {
      const response = await getPostBySlug(slug);
      return response.data;
    },
    enabled: !!slug,
  });
};

export const useGetPostById = (id: number) => {
  return useQuery({
    queryKey: [POST, id],
    queryFn: async () => {
      const response = await getPostById(id);
      return response.data;
    },
    enabled: !!id,
  });
};
