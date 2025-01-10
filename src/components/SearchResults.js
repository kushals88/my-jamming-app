import React from 'react';
import Track from './Track';
import styles from '../styles/SearchResults.module.css';

function SearchResults(props){
    return(
        <div>
            <h2>Search Results</h2>
            <div>
                <ul className={styles.searchList}>
                    {props.searchResults.map((track, index) => (
                        <li key={index}>
                            <Track track={track} />
                            <button name="add" onClick={(e)=>props.updateTrackList(track)}>+</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SearchResults;