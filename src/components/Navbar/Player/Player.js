import React, {useState, useContext} from 'react';

import useStyles from "./useStyles";

import {
    Typography,
    Box,
    Paper,
    Grid,
    IconButton
} from '@material-ui/core';
import {
    PlayArrow,
    Pause,
    ChevronLeft,
    ChevronRight,
    Menu,
} from '@material-ui/icons';

import {PlayerContext} from "../../../context/PlayerContext";

import {DialogPlayList} from "../../DialogPlayList/DialogPlayList";

export const Player_set = () => {
    const classes = useStyles();
    const player_root = useContext(PlayerContext);

    const [statusPlay, setStatusPlay] = useState(false);
    const [rendering, setRendering] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const leftNextHandler = () => {
        player_root.runPlayList.previous_track();
        player_root.initStart(player_root.runPlayList.current());
    };

    const rightNextHandler = () => {
        player_root.runPlayList.next_track();
        player_root.initStart(player_root.runPlayList.current());
    };

    const pauseHandler = () => {
        setStatusPlay(!statusPlay);
        player_root.runStart();
        setRendering(!rendering);
    };

    const listHandler = async () => {
        setIsDialogOpen(true);
    };

    return (
        <>
        <Paper >
            <Grid container spacing={1} className={classes.testName}>
                <Grid item xs={1}>
                    <IconButton
                        onClick={() => {leftNextHandler()}}
                    >
                        <ChevronLeft />
                    </IconButton>
                </Grid>

                <Grid item xs={1}>
                    <IconButton
                        onClick={() => {pauseHandler()}}
                    >
                        {player_root.isRun ? (
                            <Pause />
                        ) : (
                            <PlayArrow />
                        )}
                    </IconButton>
                </Grid>

                <Grid item xs={1}>
                    <IconButton
                        onClick={() => {rightNextHandler()}}
                    >
                        <ChevronRight />
                    </IconButton>
                </Grid>

                <Box m={2} />

                <Grid item xs={6}>
                    <Typography>
                        {/*{ player_root.PlayListsDiv[0] ? player_root.PlayListsDiv[0].getToSound().toNameComposition() : null}*/}
                        {player_root.runPlayList ? player_root.runPlayList.current().label : null}
                    </Typography>
                </Grid>

                <Grid item xs={1}>
                    <IconButton
                        onClick={() => {listHandler()}}
                    >
                        <Menu />
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
            <DialogPlayList isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} playList={player_root.runPlayList}/>
        </>
    );
};
