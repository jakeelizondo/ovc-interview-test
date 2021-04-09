import React from 'react';
import ReactDOM from 'react-dom';
import { testFunc } from '../../utility/test-helpers';
import HeadingBar from './HeadingBar';

describe('Search Bar', () => {
  it('renders without crashing', () => {
    const table = document.createElement('table');
    ReactDOM.render(
      <HeadingBar onButtonClick={testFunc} headingText={'test-text'} />,
      table
    );
    ReactDOM.unmountComponentAtNode(table);
  });
});
