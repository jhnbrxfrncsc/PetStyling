import { makeStyles } from '@material-ui/core';
import groomImg from '../../assets/img/service-img.png';


export default makeStyles(theme => ({
    root: {
        marginTop: "5px",
        paddingTop: "25px",
        height: "100vh",
        background: "linear-gradient(#9DB4FA ,#FFFFFF)",
    },
    font1: {
        fontFamily: "Oswald"
    },
    font2: {
        fontFamily: "Oswald",
    },
    groomContainer : {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            flexWrap: "wrap",
        }
    },
    groomService :{
        height: 500,
        width: 550,
        background: `url(${groomImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: 3,
        // [theme.breakpoints.down('sm')] : {
        //     height: 450,
        //     width: 500,
        // },
        [theme.breakpoints.down('xs')] : {
            height: 450,
            width: 500,
        },
    },
    groomInfo : {
        height: "500px",
        display : "flex",
        flexDirection : "column",
        alignItems : "flex-end",
        justifyContent : "center",
        textAlign : "end",
        zIndex: 2,
        [theme.breakpoints.down('sm')] : {
            height: "100%",
            width: "100%",
            flexWrap : "wrap",
            marginTop: 25,
        },
        [theme.breakpoints.down('xs')] : {
            height: "100%",
            width: "100%",
            flexWrap : "wrap",
            justifyContent : "flex-start",
            alignItems : "center",
            marginTop: 25,
            textAlign: "center",
        }
    },
    btn : {
        color: "#FFF",
        background: "#000",
        borderRadius: 0,
        width: "48%",
        fontSize: ".8em",
        '&:hover' : {
            background: "#333"
        }, 
        [theme.breakpoints.down('xs')] : {
            width: "75%"
        }
    }
}))