import { makeStyles } from '@material-ui/core';
import groomImg from '../../assets/img/service-img.png';
import boardingImg from '../../assets/img/service-img-2.png';
import boardingEatImg from '../../assets/img/boarding-eat.png';
import boardingPlayImg from '../../assets/img/boarding-play.png';
import boardingSleepImg from '../../assets/img/boarding-sleep.png';
import groomingBathImg from '../../assets/img/grooming-bath.png';
import groomingHaircutImg from '../../assets/img/grooming-haircut.png';


export default makeStyles(theme => ({
    root: {
        marginTop: "5px",
        padding: "55px 0",
        height: "100%",
        background: "radial-gradient(#9DB4FA ,#FFFFFF)",
    },
    font1: {
        fontFamily: "Oswald"
    },
    font2: {
        fontFamily: "Oswald",
    },
    container : {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            flexWrap: "wrap",
        }
    },
    wrapper: {
        margin: 6
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
    },

    // GROOM SERVICE
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

    // BOARDING SERVICE
    boardingService :{
        height: 500,
        width: 580,
        marginTop: 12,
        background: `url(${boardingImg})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        [theme.breakpoints.down('sm')] : {
            width: "100vw",
            backgroundSize: "80% 100%",
            order: -1
        },
        [theme.breakpoints.down('xs')] : {
            height: 450,
            width: 500,
            backgroundSize: "100% 100%",
        },
    },
    boardingInfo : {
        height: "500px",
        display : "flex",
        flexDirection : "column",
        alignItems : "flex-start",
        justifyContent : "center",
        textAlign : "start",
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
    boardingEat : {
        height: 40,
        width: 40,
        background: `url(${boardingEatImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom"
    },
    boardingPlay : {
        height: 40,
        width: 40,
        background: `url(${boardingPlayImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    },
    boardingSleep : {
        height: 40,
        width: 40,
        background: `url(${boardingSleepImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    },
    groomingBath: {
        height: 40,
        width: 40,
        background: `url(${groomingBathImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    },
    groomingHaircut: {
        height: 40,
        width: 40,
        background: `url(${groomingHaircutImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
    },
}))