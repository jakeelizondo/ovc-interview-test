import React from 'react';

interface TableHeaderProps {
  cols: string[];
}

const TableHeader = (props: TableHeaderProps) => {
  return (
    <thead>
      <tr className="header-row">
        {props.cols.map((col) => {
          return <th>{col}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
