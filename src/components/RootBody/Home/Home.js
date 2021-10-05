import React, {useContext} from 'react';
import useStyles from "./useStyles";

import {
    Grid,
    Box,
} from '@material-ui/core';
import {ConstComposition} from "../../Composition/ConstComposition/ConstComposition";

import {PlayerContext} from "../../../context/PlayerContext";

export const Home = () => {
    const classes = useStyles();
    const player_root = useContext(PlayerContext);

    return (
        <Box className={classes.root}>
            <Grid container spacing={1} alignItems="center">
                {player_root.PlayLists[0]?.toArray().map((item, index) => (
                    <>
                        <ConstComposition playList={player_root.PlayLists[0]} composition={item} index={index} />
                        <Grid className={classes.hr} />
                    </>
                ))}
            </Grid>
        </Box>
    )
}
