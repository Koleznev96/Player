import React, {useState} from 'react';
import useStyles from "./useStyles";

import {
    Typography,
    Grid,
    Button,
    Box,
} from '@material-ui/core';

import {PlayListDiv} from "./PlayListsDiv/PlayListsDiv";
import {Home} from "./Home/Home";

export const RootBody = () => {
    const classes = useStyles();

    const [status, setStatus] = useState(true);

    return (
        <Grid className={classes.root}>
            <Grid item sm={3}>
                <Button
                    className={classes.left}
                    onClick={() => setStatus(true)}
                >
                    <Typography variant="subtitle1">
                        Все треки
                    </Typography>
                </Button>

                <Button
                    className={classes.left}
                    onClick={() => setStatus(false)}
                >
                    <Typography variant="subtitle1">
                        Плейлисты
                    </Typography>
                </Button>
            </Grid>
            <Box sx={{ m: 1 }} />
            <Grid item sm={9}>
                <Box className={classes.rootRight}>
                    {status ? (
                        <Home />
                    ) : (
                        <PlayListDiv />
                    )}
                </Box>
            </Grid>
        </Grid>
    )
}
