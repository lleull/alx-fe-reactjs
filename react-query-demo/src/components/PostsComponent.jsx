import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// Function to fetch posts
const fetchPosts = async (page = 1, limit = 10) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

function PostsComponent() {
  const [page, setPage] = useState(1);
  
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    staleTime: 5000, // data stays fresh for 5 seconds
    cacheTime: 1000 * 60 * 5, // cache persists for 5 min
    refetchOnWindowFocus: true, // Refetch data when window gains focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#2c3e50", textAlign: "center" }}>React Query Posts Demo</h2>
      
      <div style={{ 
        backgroundColor: "#f8f9fa", 
        padding: "15px", 
        borderRadius: "8px", 
        marginBottom: "20px",
        border: "1px solid #e9ecef"
      }}>
        <h3 style={{ marginTop: 0, color: "#495057" }}>Caching Features:</h3>
        <ul style={{ color: "#6c757d" }}>
          <li><strong>refetchOnWindowFocus:</strong> Data refetches when window gains focus</li>
          <li><strong>keepPreviousData:</strong> Previous data remains visible during refetch</li>
          <li><strong>staleTime:</strong> 5 seconds (data considered fresh for this period)</li>
          <li><strong>cacheTime:</strong> 5 minutes (cached data persists for this period)</li>
        </ul>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <button 
          onClick={() => setPage(old => Math.max(old - 1, 1))}
          disabled={page === 1}
          style={{
            padding: "10px 15px",
            backgroundColor: page === 1 ? "#ccc" : "#3498db",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: page === 1 ? "not-allowed" : "pointer"
          }}
        >
          Previous Page
        </button>
        
        <span style={{ fontWeight: "bold", color: "#2c3e50" }}>Page {page}</span>
        
        <button 
          onClick={() => {
            if (!isPreviousData) {
              setPage(old => old + 1)
            }
          }}
          disabled={isPreviousData}
          style={{
            padding: "10px 15px",
            backgroundColor: isPreviousData ? "#ccc" : "#3498db",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: isPreviousData ? "not-allowed" : "pointer"
          }}
        >
          Next Page
        </button>
      </div>

      <button 
        onClick={() => refetch()}
        disabled={isFetching}
        style={{
          padding: "10px 15px",
          backgroundColor: isFetching ? "#95a5a6" : "#2ecc71",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: isFetching ? "not-allowed" : "pointer",
          marginBottom: "20px",
          width: "100%"
        }}
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      {isFetching && (
        <div style={{
          padding: "10px",
          backgroundColor: "#fff3cd",
          color: "#856404",
          border: "1px solid #ffeaa7",
          borderRadius: "4px",
          marginBottom: "15px",
          textAlign: "center"
        }}>
          Background refetching...
        </div>
      )}

      <div style={{
        opacity: isFetching ? 0.6 : 1,
        transition: "opacity 0.3s ease"
      }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts.map((post) => (
            <li key={post.id} style={{
              backgroundColor: "white",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              borderLeft: "4px solid #3498db"
            }}>
              <strong style={{ color: "#2c3e50", fontSize: "18px" }}>{post.title}</strong>
              <p style={{ color: "#7f8c8d", margin: "10px 0 0 0" }}>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <div style={{
        marginTop: "30px",
        padding: "15px",
        backgroundColor: "#e8f4f8",
        borderRadius: "8px",
        border: "1px solid #b8d4e3"
      }}>
        <h4 style={{ color: "#2c3e50", marginTop: 0 }}>Window Focus Test:</h4>
        <p style={{ color: "#7f8c8d", margin: 0 }}>
          Try switching to another window or tab and then coming back. The data will automatically refetch thanks to <code>refetchOnWindowFocus: true</code>.
        </p>
      </div>
    </div>
  );
}

export default PostsComponent;