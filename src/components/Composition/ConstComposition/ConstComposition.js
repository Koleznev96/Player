import React, {useContext} from 'react';

import {
    Typography,
    IconButton,
    Grid,
    Box,
} from "@material-ui/core";
import {PlayCircleFilled} from '@material-ui/icons';

import {PlayerContext} from "../../../context/PlayerContext";

export const ConstComposition = ({
    playList,
    composition,
    index
}) => {
    const player_root = useContext(PlayerContext);

    const pauseHandler = () => {
        player_root.newRunPlayLists(playList);
        let state_track = {
            sound: composition.sound,
            label: composition.label,
        }
        playList.play_all(state_track);
        player_root.initStart(playList.current());
    };

    return (
        <Box key={index.toString()}>
            <Grid container spacing={1} alignItems="center" >
                <Grid item xs={1}>
                    <IconButton
                        onClick={() => {pauseHandler()}}
                    >
                        <PlayCircleFilled fontSize="large"/>
                    </IconButton>
                </Grid>

                <Box m={3} />

                <Box>
                    <Typography>
                        { composition?.label }
                    </Typography>
                </Box>
            </Grid>
        </Box>
    )
}
