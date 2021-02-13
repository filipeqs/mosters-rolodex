import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ placeholder, handleChange, searchField }) => (
    <div>
        <input
            className="search"
            type="search"
            placeholder={placeholder}
            value={searchField}
            onChange={handleChange}
        />
    </div>
);

export default SearchBox;
