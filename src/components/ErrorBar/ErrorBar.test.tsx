import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBar from './ErrorBar';

describe('Search Bar', () => {
  it('renders without crashing', () => {
    const table = document.createElement('table');
    ReactDOM.render(<ErrorBar message={'test-error'} />, table);
    ReactDOM.unmountComponentAtNode(table);
  });
});
