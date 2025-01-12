import React from 'react';
import Track from './Track';
import styles from '../styles/SearchTrackList.module.css';

function TrackList(props) {
    return (
        <div>
            <ul className={styles.searchList}>
                {props.trackList.map((track, index) => (
                    <li key={index}>
                        <Track track={track} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TrackList;