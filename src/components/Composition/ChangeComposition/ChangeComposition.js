import React, {useContext} from 'react';
import useStyles from "./useStyles";

import {
    Typography,
    IconButton,
    Grid,
    Box,
} from "@material-ui/core";
import {
    PlayCircleFilled,
    Clear,
    ArrowUpward,
    ArrowDownward
} from '@material-ui/icons';
import {PlayerContext} from "../../../context/PlayerContext";


export const ChangeComposition = ({
    playList,
    composition,
    rendering,
    setRendering,
    index
}) => {
    const classes = useStyles();
    const player_root = useContext(PlayerContext);

    const deleteTrack = () => {
        playList.remove(composition);
        setRendering(!rendering);
    }

    const dragHandler = () => {
        playList.drag(composition);
        setRendering(!rendering);
    }

    const dropHandler = () => {
        playList.drop(composition);
        setRendering(!rendering);
    }

    const pauseHandler = () => {
        player_root.newRunPlayLists(playList);
        let state_track = {
            sound: composition.sound,
            label: composition.label,
        }
        player_root.runPlayList.play_all(state_track);
        player_root.initStart(player_root.runPlayList.current());
    };

    return (
        <Box key={index.toString()}>
            <Grid container spacing={1} alignItems="center" className={classes.root}>
                <Grid item xs={1}>
                    <IconButton
                        onClick={() => {pauseHandler()}}
                    >
                        <PlayCircleFilled fontSize="large"/>
                    </IconButton>
                </Grid>

                <Box m={3} />

                <Grid item xs={6}>
                    <Typography>
                        { composition?.label }
                    </Typography>
                </Grid>

                <Grid item xs={1}>
                    <IconButton
                        aria-label="close"
                        onClick={() => dragHandler()}
                    >
                        <ArrowUpward fontSize="medium"/>
                    </IconButton>
                </Grid>

                <Grid item xs={1}>
                    <IconButton
                        aria-label="close"
                        onClick={() => dropHandler()}
                    >
                        <ArrowDownward fontSize="medium"/>
                    </IconButton>
                </Grid>

                <Grid item xs={1}>
                    <IconButton
                        aria-label="close"
                        onClick={() => deleteTrack()}
                    >
                        <Clear fontSize="medium"/>
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}
