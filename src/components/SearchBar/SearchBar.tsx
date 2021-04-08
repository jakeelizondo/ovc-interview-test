import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onFilter: (text: string) => void;
  onReset: () => void;
  isFiltering: boolean;
}

const SearchBar = (props: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    props.onFilter(searchTerm);
    setSearchTerm('');
  };

  const handleTableReset = () => {
    setSearchTerm('');
    props.onReset();
  };

  return (
    <div className="search-bar">
      <label htmlFor="search-input">Search By User Name:</label>
      <input
        type="text"
        id="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {props.isFiltering ? (
        <button onClick={handleTableReset}>Reset</button>
      ) : null}
    </div>
  );
};

export default SearchBar;
