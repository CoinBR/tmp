import React from 'react';
import { Post } from '../types/post';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
      <div className="bg-gray-700">
        <div>{post.title}</div>
        <div>{post.body}</div>
      </div>
  );
};

export default PostCard;

