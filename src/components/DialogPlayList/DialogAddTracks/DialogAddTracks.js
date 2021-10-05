import React, {useContext} from 'react';
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
    DialogActions,
    Button
} from "@material-ui/core";
import {
    Close as CloseIcon,
} from "@material-ui/icons";

import {CreatComposition} from "../../Composition/CreatComposition/CreatComposition";
import {PlayerContext} from "../../../context/PlayerContext";


export const DialogAddTracks = ({
    setIsDialogAddTracks,
    isDialogAddTracks,
    setListTracks,
    listTracks
}) => {
    const classes = useStyles();
    const player_root = useContext(PlayerContext);

    const onClose = () => {
        setIsDialogAddTracks(false);
        setListTracks([]);
    };

    const onCloseAndAddTracks = () => {
        let new_state = listTracks.map(function(item) {
            return {sound: item?.sound, label: item?.label};
        });
        setListTracks(new_state);
        setIsDialogAddTracks(false);
    };

    return (
        <Dialog
            open={isDialogAddTracks}
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
                    Выберите треки
                </Typography>
                <IconButton aria-label="close" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Divider variant="middle" />
            <DialogContent id="new-reservation-dialog-descri">
                <Box sx={{ m: 2 }} />
                <Grid className={classes.hr}/>
                {player_root.PlayLists[0]?.toArray().map((item, index) => (
                    <>
                        <CreatComposition composition={item} setListTracks={setListTracks} listTracks={listTracks} index={index}/>
                        <Grid className={classes.hr}/>
                    </>
                ))}
                <Box sx={{ m: 2 }} />
            </DialogContent>

            <Divider variant="middle" />
            <DialogActions className={classes.dialogActions} disableSpacing>
                <Button
                    variant="outlined" color="primary"
                    className={classes.butAdd}
                    onClick={() => onClose()}
                >
                    Отменить
                </Button>
                <Box sx={{ m: 1 }} />
                <Button
                    variant="contained" color="primary"
                    className={classes.butAdd}
                    onClick={() => onCloseAndAddTracks()}
                >
                    Добавить
                </Button>
            </DialogActions>

        </Dialog>
    )
}
