import React, {useContext, useEffect, useState} from 'react';
import useStyles from "./useStyles";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    Divider,
    Typography,
    IconButton,
    Grid,
    Box,
    DialogActions, Button
} from "@material-ui/core";
import {
    Close as CloseIcon,
} from "@material-ui/icons";

import {ChangeComposition} from "../Composition/ChangeComposition/ChangeComposition";
import {DialogSettingAddTracks} from "./DialogSettingAddTracks/DialogSettingAddTracks";
import {ConstComposition} from "../Composition/ConstComposition/ConstComposition";
import {PlayerContext} from "../../context/PlayerContext";


export const DialogPlayList = ({
    setIsDialogOpen,
    isDialogOpen,
    playList,
}) => {
    const classes = useStyles();
    const player_root = useContext(PlayerContext);

    const [isDialogAddTracks, setIsDialogAddTracks] = useState(false);
    const [rendering, setRendering] = useState(false);

    const onClose = () => {
        setIsDialogOpen(false);
    };

    useEffect( () => {}, [rendering]);

    return (
        <>
        <Dialog
            open={isDialogOpen}
            onClose={onClose}
            fullWidth={true}
            scroll="paper"
            aria-labelledby="new-reservation-dialog-title"
            aria-describedby="new-reservation-dialog-descri"
        >
            <DialogTitle
                id="new-reservation-dialog-title"
                disableTypography
                className={classes.dialogTitle}
            >
                <Typography variant="h5">
                    {playList?.getName()}
                </Typography>
                <IconButton aria-label="close" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Divider variant="middle" />
            <DialogContent id="new-reservation-dialog-descri">
                <Box sx={{ m: 2 }} />
                {
                    playList ? (
                        playList !== player_root.PlayLists[0] ? (
                            playList?.toArray().map((item, index) => (
                                <>
                                    <ChangeComposition
                                        playList={playList}
                                        composition={item}
                                        rendering={rendering}
                                        setRendering={setRendering}
                                        index={index}
                                    />
                                    <Grid className={classes.hr}/>
                                </>
                            ))
                        ) : (
                            player_root.PlayLists[0]?.toArray().map((item, index) => (
                                <>
                                <ConstComposition playList={player_root.PlayLists[0]} composition={item} index={index} />
                                <Grid className={classes.hr} />
                                </>
                            ))
                        )
                    ) : null
                }
                <Box sx={{ m: 2 }} />
            </DialogContent>

            { playList?.getName() !== "Все треки" ? (
                <>
                    <Divider variant="middle" />

                    <DialogActions className={classes.dialogActions} disableSpacing>
                        <Button
                            variant="outlined" color="primary"
                            className={classes.butAdd}
                            onClick={() => setIsDialogAddTracks(true)}
                        >
                            + Добавить музыку
                        </Button>
                    </DialogActions>
                </>
            ) : null}

        </Dialog>

            <DialogSettingAddTracks
                setIsDialogAddTracks={setIsDialogAddTracks}
                isDialogAddTracks={isDialogAddTracks}
                playList={playList}
            />
        </>
    )
}
