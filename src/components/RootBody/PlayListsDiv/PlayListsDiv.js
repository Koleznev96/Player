import React, {useContext, useState} from 'react';
import useStyles from "./useStyles";

import {
    Grid,
    CardActions,
    Button,
    Card,
} from '@material-ui/core';

import {CardPlayList} from "./CardPlayList/CardPlayList";

import {PlayerContext} from "../../../context/PlayerContext";

import {DialogNewPlayList} from "./DialogNewPlayList/DialogNewPlayList";


export const PlayListDiv = () => {
    const classes = useStyles();
    const player_root = useContext(PlayerContext);

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
        <Grid item xs={12}>
                <Grid container>
                    {player_root.PlayLists.map((item, index) => {
                        if (index !== 0) {
                            return (
                                <Grid item>
                                    <CardPlayList playList={item} index={index}/>
                                </Grid>
                            );
                        }
                        return null;
                    })}

                    <Grid item>
                        <Card className={classes.rootCard}>
                            <CardActions>
                                <Button
                                    size="small"
                                    color="info"
                                    onClick={() => setIsDialogOpen(true)}
                                    className={classes.imgCard}
                                >
                                    Создать новый плейлист
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
        </Grid>

            <DialogNewPlayList setIsDialogOpen={setIsDialogOpen} isDialogOpen={isDialogOpen} />
        </>
    )
}
