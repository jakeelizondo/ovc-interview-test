import React from 'react';
import ReactDOM from 'react-dom';
import UserTable from './UserTable';

describe('User Table', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <UserTable
        users={[]}
        posts={[]}
        isFiltering={false}
        filterTerm={''}
        isViewingPosts={false}
        onRowClick={() => {}}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
