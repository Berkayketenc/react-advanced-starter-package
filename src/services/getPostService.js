import { useQuery } from "@tanstack/react-query";
import { getPostApi } from "../api/getPostsApi";
import * as Sentry from "@sentry/react";

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const response = await getPostApi.getPosts();
        return response.data;
      } catch (error) {
        console.error("React Query Error:", error);
        Sentry.captureException(error, {
          extra: {
            message: "React Query API request failed",
          },
        });
        throw error;
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};
