import apiClient from "./apiClient";

export const getPostApi = {
  getPosts: () => apiClient.get("/posts?_limit=5"),
};
