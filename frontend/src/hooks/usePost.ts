import { useQuery } from "@tanstack/react-query";
import { getPostBySlug } from "../services/posts";

export const POST = "POST";

const useGetPostBySlug = (postId: string) => {
  return useQuery({
    queryKey: [POST, postId],
    queryFn: async () => {
      const response = await getPostBySlug(postId);
      return response.data;
    },
  });
};

export default useGetPostBySlug;
