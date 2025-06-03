import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "../services/posts";

export const AUTH = "check-auth";

const useProtectedRoute = () => {
  return useQuery({
    queryKey: [AUTH],
    queryFn: async () => {
      const respone = await checkAuth();
      return respone;
    },
    retry: false, // evita retry infiniti in caso di 401
  });
};

export default useProtectedRoute;
