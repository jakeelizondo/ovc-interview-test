import React from 'react';
import { Post } from '../../posts.model';

interface UserPostRowProps {
  post: Post;
}

const UserPost = (props: UserPostRowProps) => {
  return (
    <tr>
      <td>{props.post.title}</td>
      <td>{props.post.body}</td>
    </tr>
  );
};

export default UserPost;
