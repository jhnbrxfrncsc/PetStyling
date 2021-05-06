import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
    font1:{
        fontFamily: "Oswald",
        fontSize: "1.9em"
    },
    font2:{
        fontFamily: "Fira Code",
        [theme.breakpoints.down('sm')] : {
            fontSize: "3em"
        },
    },
    font3:{
        fontFamily: "Lato",
        [theme.breakpoints.down('md')] : {
            fontSize: "1.2em"
        },
        [theme.breakpoints.down('sm')] : {
            fontSize: "1.2em"
        },
    },
    font4:{
        fontFamily: "Lato",
        [theme.breakpoints.down('md')] : {
            fontSize: "1em"
        },
        [theme.breakpoints.down('sm')] : {
            fontSize: ".8em"
        },
    },
    tipsContainer : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        height: "80vh",
        width: "80vw",
        [theme.breakpoints.down('md')] : {
            width: "100vw",
        },
        [theme.breakpoints.down('sm')] : {
            height: "100%",
            width: "80vw",
        },
    },
    tipsWrapper : { 
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        width: 350,
        margin: "0px 52px",
        [theme.breakpoints.down('md')] : {
            width: 300,
        },
        [theme.breakpoints.down('sm')] : {
            width: 250,
            textAlign: "center",
            margin: "35px 0px",
        },
    },
    icon : {
        background: "#9DB4FA",
        color: "#FFFFFF",
        height: 30,
        width: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginTop: 12,
        marginRight: 6
    },
}));