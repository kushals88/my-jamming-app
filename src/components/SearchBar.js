import React from 'react';

function SearchBar({ searchText, setSearchText }) {

    return (
        <input type="text"
            id="search" 
            name="search" 
            placeholder='Enter song or album or artist name' 
            value={searchText} onChange={(e) => setSearchText(e.target.value)}
            style={{height:50, fontSize: '1.2rem', borderRadius:'5px'}} 
            />
    );
}

export default SearchBar;