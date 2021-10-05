import React, {useContext, useState} from 'react';
import useStyles from "./useStyles";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    Divider,
    Typography,
    IconButton,
    TextField,
    Box,
    DialogActions,
    Button
} from "@material-ui/core";
import {
    Close as CloseIcon,
} from "@material-ui/icons";

import {PlayerContext} from "../../../../context/PlayerContext";

import {DialogAddTracks} from "../../../DialogPlayList/DialogAddTracks/DialogAddTracks";


export const DialogNewPlayList = ({
    setIsDialogOpen,
    isDialogOpen,
}) => {
    const classes = useStyles();
    const player_root = useContext(PlayerContext);

    const [namePlayList, setNamePlayList] = useState("");
    const [isDialogAddTracks, setIsDialogAddTracks] = useState(false);
    const [listTracks, setListTracks] = useState([]);

    const onClose = () => {
        setIsDialogOpen(false);
    };

    const newPlayList = () => {
        player_root.creatPlayList(namePlayList, listTracks);
        onClose();
    }

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
                    Создание нового плейлиста
                </Typography>
                <IconButton aria-label="close" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Divider variant="middle" />
            <DialogContent id="new-reservation-dialog-descri">
                <Box sx={{ m: 2 }} />
                <TextField
                    id="outlined-basic"
                    label="Название плейлиста"
                    variant="outlined"
                    fullWidth={true}
                    value={namePlayList}
                    onChange={(name) => {setNamePlayList(name.target.value)}}
                />
                <Box sx={{ m: 2 }} />
            </DialogContent>
            <Divider variant="middle" />
            <DialogActions className={classes.dialogActions} disableSpacing>
                <Button
                    variant="outlined" color="primary"
                    className={classes.butAdd}
                    onClick={() => setIsDialogAddTracks(true)}
                >
                    + Добавить музыку [{listTracks.length}]
                </Button>
                <Box sx={{ m: 1 }} />
                <Button
                    variant="contained" color="primary"
                    className={classes.butCreat}
                    onClick={() => newPlayList()}
                >
                    Создать
                </Button>
            </DialogActions>
        </Dialog>

            <DialogAddTracks setIsDialogAddTracks={setIsDialogAddTracks} isDialogAddTracks={isDialogAddTracks} setListTracks={setListTracks} listTracks={listTracks} />
        </>
    )
}
