import React, {useContext, useState} from 'react';
import useStyles from "./useStyles";

import {
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Button
} from '@material-ui/core';

import imageCard from "../../../../image/imageCard.jpg";

import {PlayerContext} from "../../../../context/PlayerContext";

import {DialogPlayList} from "../../../DialogPlayList/DialogPlayList";

export const CardPlayList = ({
    playList,
    index
}) => {
    const classes = useStyles();
    const player_root = useContext(PlayerContext);

    const [isDialogOpen, setIsDialogOpen] = useState(false);


    const playListHandler = () => {
        setIsDialogOpen(true);
    }

    return (
        <>
        <Card className={classes.root}>
            <CardActionArea
            onClick={() => playListHandler()}
            >
                <CardMedia
                    className={classes.media}
                    image="/image/imageCard.jpg"
                    title="Contemplative Reptile"
                >
                    <img src={imageCard} className={classes.img}/>
                </CardMedia>
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {playList?.getName()}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="secondary"
                    onClick={() => player_root.deletePlayList(index)}
                >
                    Удалить
                </Button>
            </CardActions>
        </Card>
            <DialogPlayList isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} playList={playList}/>
        </>
    )
}
