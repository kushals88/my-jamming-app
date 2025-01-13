
import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PlayListName from './components/PlayListName';
import TrackList from './components/TrackList';
import { fetchRequest } from './utils/requestUtil';

const searchEndPoint = "/search";
const getUserIdEndPoint = "/me";
const createPlayListEndPoint = "/users/user-id/playlists";
const addItemsEndPoint = "/playlists/playlist-id/tracks";

function App() {

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playListName, setPlayListName] = useState('');
  const [trackList, setTrackList] = useState([]);

  const handleSearch = async () => {

    const queryParams = `?q=${encodeURIComponent(searchText)}&type=track&market=US&limit=10`;

    const {data} = await fetchRequest('GET', searchEndPoint, { queryParams });
    const tracks = data.tracks?.items.map((item) => ({
      uri: item.uri,
      trackName: item.name,
      artist: item.artists.map((artist) => artist.name).join(", "),
      album: item.album.name
    }));

    setSearchResults(tracks);

    /*     const newTrack = {
          trackName: 'Sugar',
          artist: 'Maroon 5',
          album: 'V'
        };
    
        setSearchResults([
          ...searchResults,
          newTrack
        ]); */

    setSearchText('');
  };

  const getUserId = async () => {
    const {data} = await fetchRequest('GET', getUserIdEndPoint);
    return data.id;
  }

  const createPlayList = async () => {
    if (trackList.length > 0 && playListName) {
      const userId = await getUserId();
      const createEndpoint = createPlayListEndPoint.replace('user-id', userId);
      const createBody = { "name": playListName };
      const {data} = await fetchRequest('POST', createEndpoint, { body: createBody });
      const playListId = data.id;
      console.log('PlayListId: ', playListId);
      const addEndpoint = addItemsEndPoint.replace('playlist-id', playListId);
      const trackURIs = trackList.map((track) => track.uri);
      const addBody = { "uris": trackURIs};
      const {responseCode} = await fetchRequest('POST', addEndpoint, { body: addBody });
      
      if(responseCode === 201){
        alert(`${playListName} created successfully!`);
        setTrackList([]);
        setPlayListName('');
      }
      else{
        console.log("Error while adding tracks to playlist");
      }
      
    }
  }

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
          <button id="search" name="search" onClick={handleSearch} disabled ={!searchText}>Search</button>
        </div>
        <div className="outputContainer">
          <div className="searchResultContainer">
            <SearchResults searchResults={searchResults} updateTrackList={updateTrackList} />
          </div>
          <div className="playListContainer">
            <div className="playListNameInput">
              <PlayListName playList={playListName} setPlayList={setPlayListName} />
            </div>
            <TrackList trackList={trackList} setTrackList={setTrackList} />
            <button onClick={createPlayList} disabled ={!playListName || !trackList}>Save To Spotify</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
