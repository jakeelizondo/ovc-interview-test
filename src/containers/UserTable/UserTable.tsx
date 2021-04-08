import React from 'react';
import UserRow from '../../components/UserRow/UserRow';
import { User } from '../../users.model';
import './UserTable.css';

interface UserTableProps {
  users: User[];
  isFiltering?: boolean;
  filterTerm?: string;
  onRowClick: (id: number, name: string) => void;
}

const UserTable = (props: UserTableProps) => {
  const generateAllUsers = () => {
    return props.users.map((user) => {
      return (
        <UserRow
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
    const filteredUsers: any[] = [];

    props.users.forEach((user) => {
      if (user.name.toLowerCase().includes(props.filterTerm!.toLowerCase())) {
        filteredUsers.push(
          <UserRow
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

    return filteredUsers;
  };

  return (
    <table className="user-table">
      <thead>
        <tr className="header-row">
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {!props.isFiltering ? generateAllUsers() : null}
        {props.isFiltering ? generateFilteredUsers() : null}
      </tbody>
    </table>
  );
};

export default UserTable;
