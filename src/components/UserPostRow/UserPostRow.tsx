import React from 'react';
import { Post } from '../../posts.model';
import './UserPostRow.css';

interface UserPostRowProps {
  post: Post;
}

const UserPost = (props: UserPostRowProps) => {
  return (
    <tr>
      <td className="post-title">{props.post.title}</td>
      <td className="post-body">{props.post.body}</td>
    </tr>
  );
};

export default UserPost;
