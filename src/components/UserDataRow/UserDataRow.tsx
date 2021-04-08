import React from 'react';
import './UserDataRow.css';

interface UserDataRowProps {
  onRowClick: (id: number, name: string) => void;
  user: {
    id: number;
    name: string;
    email: string;
    city: string;
    company: string;
  };
}

const UserRow = (props: UserDataRowProps) => {
  return (
    <tr
      className="user-row hoverable"
      onClick={() => props.onRowClick(props.user.id, props.user.name)}
    >
      <td className="user-name">{props.user.name}</td>
      <td className="user-email">
        <a href={`mailto:${props.user.email}`}>{props.user.email}</a>
      </td>
      <td className="user-city">{props.user.city}</td>
      <td className="user-company">{props.user.company}</td>
    </tr>
  );
};

export default UserRow;
