import {createContext} from 'react';

function noop() {}

export const PlayerContext = createContext({
    PlayLists: null,
    creatPlayList: noop,
    deletePlayList: noop,
    runPlayList: null,
    newRunPlayLists: noop,
    initTrack: noop,
    initStart: noop,
    runStart: noop,
    isRun: null,
});
