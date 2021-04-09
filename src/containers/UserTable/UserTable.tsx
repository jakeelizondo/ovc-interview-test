import React from 'react';
import { Post } from '../../posts.model';
import { User } from '../../users.model';

import TableHeader from '../../components/TableHeader/TableHeader';
import UserPostRow from '../../components/UserPostRow/UserPostRow';
import UserDataRow from '../../components/UserDataRow/UserDataRow';
import './UserTable.css';

interface UserTableProps {
  users: User[];
  posts: Post[];
  isFiltering: boolean;
  filterTerm: string;
  isViewingPosts: boolean;
  onRowClick: (id: number, name: string) => void;
}

const UserTable = (props: UserTableProps) => {
  const generateAllUsers = () => {
    return props.users.map((user) => {
      return (
        <UserDataRow
          key={user.id}
          user={{
            id: user.id,
            name: user.name,
            email: user.email,
            city: user.address.city,
            company: user.company.name,
          }}
          onRowClick={props.onRowClick}
        />
      );
    });
  };

  const generateFilteredUsers = () => {
    const filteredUsers: JSX.Element[] = [];

    props.users.forEach((user) => {
      if (user.name.toLowerCase().includes(props.filterTerm!.toLowerCase())) {
        filteredUsers.push(
          <UserDataRow
            key={user.id}
            user={{
              id: user.id,
              name: user.name,
              email: user.email,
              city: user.address.city,
              company: user.company.name,
            }}
            onRowClick={props.onRowClick}
          />
        );
      }
    });
    if (!!filteredUsers.length) {
      return filteredUsers;
    } else {
      return (
        <tr>
          <td className="empty-search-message">
            Sorry, no users were found for that search
          </td>
          <td />
          <td />
          <td />
        </tr>
      );
    }
  };

  const generateUserPosts = () => {
    return props.posts.map((post) => {
      return <UserPostRow key={post.id} post={post} />;
    });
  };

  return (
    <table className="user-table">
      {props.isViewingPosts ? (
        <TableHeader cols={['Title', 'Body']} />
      ) : (
        <TableHeader cols={['Name', 'Email', 'City', 'Company']} />
      )}

      <tbody>
        {!props.isFiltering && !props.isViewingPosts
          ? generateAllUsers()
          : null}
        {props.isFiltering && !props.isViewingPosts
          ? generateFilteredUsers()
          : null}
        {props.isViewingPosts ? generateUserPosts() : null}
      </tbody>
    </table>
  );
};

export default UserTable;
