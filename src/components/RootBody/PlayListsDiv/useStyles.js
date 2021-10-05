import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    rootCard: {
        width: 320,
        height: 60,
        marginRight: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    imgCard: {
        width: '100%',
        height: 45,
    },
}));
