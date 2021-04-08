import UserPost from '../../components/UserPost/UserPost';
import { Post } from '../../posts.model';

interface UserPostsProps {
  posts: Post[];
  user: string;
  onBack: () => void;
}

const UserPosts = (props: UserPostsProps) => {
  return (
    <section>
      <button onClick={props.onBack}>Back</button>
      <h1>{`${props.user}'s Posts`}</h1>
      <table className="post-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {props.posts.map((post) => (
            <UserPost key={post.id} post={post} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UserPosts;
