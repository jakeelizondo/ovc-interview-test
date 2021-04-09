import React from 'react';
import ReactDOM from 'react-dom';
import { testFunc } from '../../utility/test-helpers';
import SearchBar from './SearchBar';

describe('Search Bar', () => {
  it('renders without crashing', () => {
    const table = document.createElement('table');
    ReactDOM.render(
      <SearchBar onFilter={testFunc} onReset={testFunc} isFiltering={false} />,
      table
    );
    ReactDOM.unmountComponentAtNode(table);
  });
});
