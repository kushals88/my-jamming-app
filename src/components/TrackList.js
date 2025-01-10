import React from 'react';
import Track from './Track';

function TrackList(props) {
    return (
        <div>
            <ul >
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