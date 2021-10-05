import {useState, useEffect} from 'react';
import {Howl} from 'howler';

import {PlayList} from './classes/PlayList';

import Macan from "../audio/audio.mp3";
import Ynost from "../audio/Ynost.mp3";
import Grust from "../audio/4.mp3";
import Sin from "../audio/5.mp3";
import Ylet from "../audio/6.mp3";
import Mimo from "../audio/7.mp3";


const audioClips = [
    {sound: Macan, label: 'MACAN - Кино'},
    {sound: Ynost, label: 'Darbo - Юность'},
    {sound: Grust, label: 'NLETTO - Если тебе грустно'},
    {sound: Sin, label: 'Rakhim - Синий Lamborghini'},
    {sound: Ylet, label: 'SHAMAN - УЛЕТАИ'},
    {sound: Mimo, label: 'Artik & Asti - Все мимо'},
];

export const usePlayer = () => {
    const [PlayLists, setPlayLists] = useState([]);
    const [runPlayList, setRunPlayList] = useState(null);
    const [isRun, setIsRun] = useState(false);
    const [utilSound, setUtilSound] = useState(null);

    const creatPlayList = async (name, compositions) => {
        let newPlayList = await new PlayList(name, compositions);
        let newList = [...PlayLists, newPlayList];
        setPlayLists(newList);
        if (compositions.length > 0 && newList.length === 1) {
            setRunPlayList(newPlayList);
            initTrack(newPlayList.current());
        }
    };

    const deletePlayList = (index) => {
        if (index >= 0) {
            let newPlyLists = [...PlayLists];
            newPlyLists.splice(index, 1);
            setPlayLists(newPlyLists);
        }
    };

    // new Player
    const newRunPlayLists = async (playList) => {
        setRunPlayList(playList);
    };

    const runStart = () => {
        if (isRun) {
            utilSound.pause();
            setIsRun(false);
        } else {
            utilSound.play();
            setIsRun(true);
        }
    }

    const initStart = (track) => {
        utilSound?.stop();
        let g = new Howl({
            src: track.sound
        });
        setUtilSound(g);
        g.play();
        setIsRun(true);
    }

    const initTrack = (track) => {
        utilSound?.stop();
        setUtilSound(
            new Howl({
                src: track.sound
            })
        );
    }

    // слушатель, если трек закончился, запускает следующий
    utilSound?.on('end', function(){
        initStart(runPlayList.next_track());
    });

    useEffect( () => {
        if (!PlayLists[0]) {
            creatPlayList("Все треки", audioClips);
        }
    }, []);

    return {
        PlayLists,
        creatPlayList,
        deletePlayList,
        runPlayList,
        newRunPlayLists,
        initTrack,
        initStart,
        runStart,
        isRun
    };
}
