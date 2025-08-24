// src/components/Blog/BlogPost.jsx
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div style={{ padding: '20px' }}>
        <h3>Post not found</h3>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div>
      <Link 
        to="/blog"
        style={{ 
          color: '#007bff', 
          textDecoration: 'none',
          marginBottom: '20px',
          display: 'inline-block'
        }}
      >
        &larr; Back to Blog
      </Link>
      <article style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '4px' }}>
        <h3>{post.title}</h3>
        <div style={{ color: '#666', marginBottom: '15px' }}>
          By {post.author} on {post.date}
        </div>
        <p>{post.content}</p>
      </article>
    </div>
  );
};

export default BlogPost;