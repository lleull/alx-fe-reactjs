// src/components/Blog/BlogList.jsx
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

const BlogList = () => {
  return (
    <div>
      <h3>Latest Posts</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {blogPosts.map(post => (
          <div key={post.id} style={{ 
            padding: '15px', 
            border: '1px solid #ddd', 
            borderRadius: '4px' 
          }}>
            <h4>{post.title}</h4>
            <p>{post.content.substring(0, 100)}...</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.9rem', color: '#666' }}>
                By {post.author} on {post.date}
              </span>
              <Link 
                to={`/blog/${post.id}`}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px'
                }}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;