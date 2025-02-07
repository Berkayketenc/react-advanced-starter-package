import React from "react";
import { useFetchGetPosts } from "../../hooks/useGetPosts.js";
import List from "../../components/common/List/List";
import withErrorBoundaryHoc from "../../utils/withErrorBoundary";
import { useSelector } from "react-redux";
const SafeListComponent = withErrorBoundaryHoc(List);

function HomePage() {
  const { posts, isLoading, error } = useFetchGetPosts();
  const message = useSelector((state) => state.app.message);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      <h1>{message}</h1>
      <SafeListComponent items={posts} />
    </div>
  );
}

export default HomePage;
