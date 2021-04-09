import React from 'react';
import ReactDOM from 'react-dom';
import { testPostsArr } from '../../utility/test-helpers';
import UserPostRow from './UserPostRow';

describe('User Post Row', () => {
  it('renders without crashing', () => {
    const table = document.createElement('table');
    ReactDOM.render(<UserPostRow post={testPostsArr[0]} />, table);
    ReactDOM.unmountComponentAtNode(table);
  });
});
