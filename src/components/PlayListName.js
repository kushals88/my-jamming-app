import React from 'react';

function PlayList({playList, setPlayList}){

    return(
        <input type="text" 
            name="playListName" 
            id="playListName" 
            value={playList} 
            onChange={(e)=>setPlayList(e.target.value)} 
            style={{width:'85%', height:30, border: 'none', borderBottom: '2px solid', outline: 'none', fontSize: '1.2rem'}}/>
    );
}

export default PlayList;