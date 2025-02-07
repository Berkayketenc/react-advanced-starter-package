import { useGetPosts } from "../services/getPostService";

export const useFetchGetPosts = () => {
  const { data: posts = [], isLoading, error } = useGetPosts();

  return { posts, isLoading, error };
};
