// src/components/PostsComponent.jsx
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // Data becomes stale after 5 minutes
  });

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <div>Loading posts...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
        <div>Error: {error.message}</div>
        <button
          onClick={() => refetch()}
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2>Posts (React Query Demo)</h2>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button
            onClick={() => refetch()}
            disabled={isFetching}
            style={{
              padding: "8px 16px",
              backgroundColor: isFetching ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: isFetching ? "not-allowed" : "pointer",
            }}
          >
            {isFetching ? "Refreshing..." : "Refresh Data"}
          </button>
          {isFetching && <span>Updating...</span>}
        </div>
      </div>

      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "#f8f9fa",
          borderRadius: "4px",
        }}
      >
        <p>
          <strong>React Query Features Demonstration:</strong>
        </p>
        <ul style={{ margin: "10px 0", paddingLeft: "20px" }}>
          <li>Data is automatically cached</li>
          <li>Try navigating away and returning to see instant loading</li>
          <li>Click "Refresh Data" to manually trigger a refetch</li>
          <li>Notice the background refetching indicator</li>
        </ul>
      </div>

      <div style={{ display: "grid", gap: "20px" }}>
        {data.slice(0, 10).map((post) => (
          <div
            key={post.id}
            style={{
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor: "#fff",
            }}
          >
            <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>{post.title}</h3>
            <p style={{ margin: "0", color: "#666" }}>{post.body}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p>Showing 10 of {data.length} posts</p>
      </div>
    </div>
  );
};

export default PostsComponent;
