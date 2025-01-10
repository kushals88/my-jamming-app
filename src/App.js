
import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PlayList from './components/PlayList';
import TrackList from './components/TrackList';


function App() {

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playList, setPlayList] = useState('');
  const [trackList, setTrackList] = useState([]);

  const handleSearch = () => {

    console.log(searchText);
    const newTrack = {
      trackName: 'Sugar',
      artist: 'Maroon 5',
      album: 'V'
    };

    setSearchResults([
      ...searchResults,
      newTrack
    ]);

    setSearchText('');
  };

  const updateTrackList = (track) => {
    setTrackList((prev) => [...prev, track]);
  };


  return (
    <div >
      <header >
        <h1> Welcome to my Jammming App</h1>
      </header>
      <main>
        <div className='sarchContainer'>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          <button id="search" name="search" onClick={handleSearch}>Search</button>
        </div>
        <div className="outputContainer">
          <div>
            <SearchResults searchResults={searchResults} updateTrackList={updateTrackList} />
          </div>
          <div className="playListContainer">
            <div>
              <PlayList playList={playList} setPlayList={setPlayList} />
            </div>
            <TrackList trackList={trackList} setTrackList={setTrackList} />
            <button>Save To Spotify</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
