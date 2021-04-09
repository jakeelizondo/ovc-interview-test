import React from 'react';
import ReactDOM from 'react-dom';
import TableHeader from './TableHeader';

describe('Table Header', () => {
  it('renders without crashing', () => {
    const table = document.createElement('table');
    const testCols = ['1', '2', '3'];

    ReactDOM.render(<TableHeader cols={testCols} />, table);
    ReactDOM.unmountComponentAtNode(table);
  });
});
