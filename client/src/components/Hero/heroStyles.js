import { makeStyles } from '@material-ui/styles';
import modelImg from '../../assets/img/model.png';


export default makeStyles(theme => ({
    font1: {
        fontFamily: "Oswald",
        [theme.breakpoints.down("lg")] : {
            fontSize: "3.6em",
            fontWeight: "bold"
        },
        [theme.breakpoints.down("md")] : {
            fontSize: "2.7em",
            fontWeight: "bold"
        },
        [theme.breakpoints.down("sm")] : {
            fontSize: "2.5em",
            fontWeight: "bold",
            textAlign: "center"
        },
    }, 
    font2: {
        fontFamily: "Fira Code",
        [theme.breakpoints.down("lg")] : {
            fontSize: "6em",
            fontWeight: "bold"
        },
        [theme.breakpoints.down("md")] : {
            fontSize: "4em",
        },
        [theme.breakpoints.down("sm")] : {
            fontSize: "3em",
            textAlign: "center"
        },
    }, 
    font3: {
        fontFamily: "Oswald",
        [theme.breakpoints.down("lg")] : {
            fontSize: "1.5em",
        },
        [theme.breakpoints.down("lg")] : {
            fontSize: "1.2em",
        },
        [theme.breakpoints.down("sm")] : {
            fontSize: ".9em",
            textAlign: "center"
        },
    }, 
    heroBG: {
        backgroundImage: `radial-gradient(#FFFFFF  ,#9DB4FA )`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%" ,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        // height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        [theme.breakpoints.down('lg')]: {
            height: "100vh",
        },
        [theme.breakpoints.down('sm')]: {
            height: "65vh",
            justifyContent: "center",
            paddingTop: 50
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            height: "65vh",
        },
    },
    model :{
        height: 400,
        width: 500,
        background: `url(${modelImg})`,
        backgroundSize: "cover",
        [theme.breakpoints.down('sm')] : {
            height: 200,
            width: 250
        },
    },
    heroText: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        [theme.breakpoints.down('xs')]: {
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
        },
        [theme.breakpoints.down('xs')]: {
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
        },
    },
    btn: {
        backgroundColor: "#000",
        color: "#fff",
        fontWeight: "bold",
        '&:hover' : {
            backgroundColor: "#333"
        },
        [theme.breakpoints.down('lg')]: {
            height: 40,
            width: 150,
            fontSize: 12
        },
        [theme.breakpoints.down('sm')]: {
            height: 30,
            width: 130,
            fontSize: 11
        },
    }
}))