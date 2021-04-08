import React from 'react';
import { Post } from '../../posts.model';
import './UserPostRow.css';

interface UserPostProps {
  post: Post;
}

const UserPost = (props: UserPostProps) => {
  return (
    <tr>
      <td>{props.post.title}</td>
      <td>{props.post.body}</td>
    </tr>
  );
};

export default UserPost;
