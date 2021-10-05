import React from 'react';
import useStyles from "./useStyles";
import {Player_set} from "./Player/Player";

import {
    Typography,
    AppBar,
    Toolbar,
    Grid
} from '@material-ui/core';

export const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="subtitle1" className={classes.textMail}>
                    APP_DEVELOPER_BUSINESS@GMAIL.COM
                </Typography>

                <Grid container justifyContent="center" className={classes.headerCenter}>
                    <Player_set />
                </Grid>

                <Typography variant="subtitle1" className={classes.textDescription}>
                    Лаба - 2
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
