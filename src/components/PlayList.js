import React from 'react';

function PlayList({playList, setPlayList}){

    return(
        <input type="text" name="playListName" id="playListName" value={playList} onChange={(e)=>setPlayList(e.target.value)} />
    );
}

export default PlayList;