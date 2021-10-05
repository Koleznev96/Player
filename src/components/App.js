import React from 'react';

import {Navbar} from "./Navbar/Navbar";
import {RootBody} from "./RootBody/RootBody";

import {usePlayer} from "../hooks/player.hook";
import {PlayerContext} from "../context/PlayerContext";


function App() {
    const { PlayLists, creatPlayList, deletePlayList, runPlayList, newRunPlayLists, initTrack, initStart, runStart, isRun } = usePlayer();

    return (
            <PlayerContext.Provider value={
                { PlayLists, creatPlayList, deletePlayList, runPlayList, newRunPlayLists, initTrack, initStart, runStart, isRun }
            }>
                <Navbar />
                <RootBody />
            </PlayerContext.Provider>
    );
}

export default App;
