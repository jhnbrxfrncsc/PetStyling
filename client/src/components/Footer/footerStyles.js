import { makeStyles } from '@material-ui/styles';
import modelImg from '../../assets/img/model-2.png';
import logoImg from '../../assets/img/logo-black.png';
import bookNowImg from '../../assets/img/book-now.png';

export default makeStyles(theme => ({
    // Keyframes
    "@keyframes numberAnimation" : {
        "0%" : {
            transform: "rotate(0deg)"
        },
        "25%" : {
            transform: "rotate(-5deg)"
        },
        "50%" : {
            transform: "rotate(0deg)"
        },
        "75%" : {
            transform: "rotate(5deg)"
        },
        "100%" : {
            transform: "rotate(0deg)"
        },
    },
    root: {
        display: "flex",
        flexDirection: "column",
        // height: "100vh"
    },
    font1: {
        fontFamily: "Oswald"
    },
    font2: {
        fontFamily: "Lato"
    },
    model: {
        position: "relative",
        height: 200,
        width: "100vw",
        background: `url(${modelImg})`,
        backgroundSize: "contain",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        marginBottom: -66,
        [theme.breakpoints.down('xs')]: {
            backgroundSize: "100% 100%",
            marginBottom: -66,
        }
    },
    footer: {
        background : "#9DB4FA",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    topSide: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column"
        }
    },
    logo: {
        height: 150,
        width: 150,
        background: `url(${logoImg})`,
        backgroundSize: "cover",
        [theme.breakpoints.down('xs')]:{
            height: 190,
            width: 190
        }
    },
    socials: {
        fontSize: 35,
        height: "80%",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down('xs')]:{
            fontSize: 30
        }
    },
    line: {
        background: "#000",
        height: 1,
    },
    botSide: {
        height: "50vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap"
    },
    about: {
        display: "flex",
        flexDirection: "column",
        height: 120,
    },
    aboutInfo: {
        display: "flex",
        alignItems: "center",
    },
    quickLinks: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: 120,
        margin: "0px 50px"
    },
    bookNow: {
        height: 150,
        width: 260,
        background: `url(${bookNowImg})`,
        backgroundSize: "cover",
        cursor: "pointer",
        animation: `$numberAnimation 3000ms infinite`,
    }
}));