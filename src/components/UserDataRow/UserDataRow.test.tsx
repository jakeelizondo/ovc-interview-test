import React from 'react';
import ReactDOM from 'react-dom';
import { testFunc, testUserConcise } from '../../utility/test-helpers';
import UserDataRow from './UserDataRow';

describe('User Data Row', () => {
  it('renders without crashing', () => {
    const table = document.createElement('table');
    ReactDOM.render(
      <UserDataRow user={testUserConcise} onRowClick={testFunc} />,
      table
    );
    ReactDOM.unmountComponentAtNode(table);
  });
});
