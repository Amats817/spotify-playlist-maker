import React from 'react';

const SearchBar = ({ query, setQuery, handleSearchClick }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearchClick()}
                placeholder="Search for tracks..."
                className="search-input"
            />
            <button onClick={handleSearchClick} className="search-button">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
