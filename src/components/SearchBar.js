import React from 'react';

function SearchBar({ searchText, setSearchText }) {

    return (
        <input type="text"
            id="search" 
            name="search" 
            placeholder='Enter song or album or artist name' 
            value={searchText} onChange={(e) => setSearchText(e.target.value)} 
            />
    );
}

export default SearchBar;