import React from 'react';
import Track from './Track';
import styles from '../styles/SearchTrackList.module.css';

function SearchResults(props) {
    return (
        <>
            <h2>Results</h2>
            <ul className={styles.searchList}>
                {props.searchResults.map((track, index) => (
                    <li key={index}>
                        <Track track={track} />
                        <button name="add" onClick={(e) => props.updateTrackList(track)}>+</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default SearchResults;