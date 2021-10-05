import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%'
    },
    list: {
        display: "flex",
        justifyContent: "row",
        width: '100%'
    },
    wr: {
        width: '100%'
    },
    hr: {
        width: '100%',
        height: 1,
        backgroundColor: '#DEDEDE'
    }
}));
