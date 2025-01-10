import React from 'react';
import styles from '../styles/Track.module.css'

function Track(props){

    const {trackName, artist, album } = props.track;

    return (
        <div className={styles.track}>
            <p>{trackName}</p>
            <span>{artist} | {album}</span>
        </div>
    );
}

export default Track;