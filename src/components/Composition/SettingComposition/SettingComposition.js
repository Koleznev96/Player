import React, {useState} from 'react';

import {
    Typography,
    IconButton,
    Grid,
    Box,
} from "@material-ui/core";
import {Check, Clear, PlayCircleFilled} from '@material-ui/icons';

export const SettingComposition = ({
    composition,
    setListTracks,
    listTracks,
    index
}) => {
    const [isStatus, setIsStatus] = useState(false);

    const deleteTrack = (indexDeleteList) => {
        let newList = [...listTracks];
        newList.splice(indexDeleteList, 1);
        setListTracks(newList);
    }

    const onAddTrack = () => {
        if (isStatus) {
            listTracks.forEach(function(item, indexDeleteList) {
                if (item.sound === composition.sound) {
                    deleteTrack(indexDeleteList);
                }
            });
            setIsStatus(false);
        } else {
            let data = {
                sound: composition.sound,
                label: composition.label,
                indexList: index
            }
            let newList = [...listTracks, data];
            setListTracks(newList);
            setIsStatus(true);
        }
    };

    return (
        <Box key={index}>
            <Grid container spacing={1} alignItems="center" >
                <Grid item xs={1}>
                    <PlayCircleFilled fontSize="large"/>
                </Grid>

                <Box m={3} />

                <Grid item xs={8}>
                    <Typography>
                        { composition?.label }
                    </Typography>
                </Grid>

                <Grid item xs={1}>
                    <IconButton
                        aria-label="close"
                        onClick={() => onAddTrack()}
                    >
                        {isStatus ? (
                            <Clear fontSize="large"/>
                        ) : (
                            <Check fontSize="large"/>
                        )}
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}
