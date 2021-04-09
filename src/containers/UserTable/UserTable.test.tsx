import React from 'react';
import ReactDOM from 'react-dom';
import {
  testFunc,
  testPostsArr,
  testUsersArr,
} from '../../utility/test-helpers';
import UserTable from './UserTable';

describe('User Table', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <UserTable
        users={testUsersArr}
        posts={testPostsArr}
        isFiltering={false}
        filterTerm={''}
        isViewingPosts={false}
        onRowClick={testFunc}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
