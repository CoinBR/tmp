import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import { Post } from '../types/post';
import PostCard from '../components/PostCard';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // TODO: Implement data fetching using the getPosts function
    
    // Example implementation - needs to be completed
    async function fetchPosts() {
      try {
        setLoading(true);
        // Fetch posts and update state
        
        // This is just sample data - replace with actual API call
        setPosts([
          {
            id: 1,
            title: "Sample Post Title",
            body: "This is a sample post body. Replace this with actual data from the API.",
            userId: 1
          },
          {
            id: 2,
            title: "Sample Post Title",
            body: "This is a sample post body. Replace this with actual data from the API.",
            userId: 1
          },
          {
            id: 3,
            title: "Sample Post Title",
            body: "This is a sample post body. Replace this with actual data from the API.",
            userId: 3
          },          {
            id: 4,
            title: "Sample Post Title",
            body: "This is a sample post body. Replace this with actual data from the API.",
            userId: 3
          }
        ]);
      } catch (err) {
        setError('Failed to fetch posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="container mx-auto p-6 text-center">Loading posts...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">JSONPlaceholder Posts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

