import { Post } from '../types/post';

// TODO: Implement the function to fetch posts from JSONPlaceholder API
export async function getPosts(): Promise<Post[]> {
  // This is a starter implementation - needs to be completed
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      // TODO: handle
    }
    
    return []; // Replace this with the actual data from the response
  } catch (error) {
      // TODO: handle
  }
}

