import { makeStyles } from '@material-ui/styles';
// import bgHero from '../../assets/img/newBGHERO.png';


export default makeStyles(theme => ({
    font1: {
        fontFamily: "Oswald",
        [theme.breakpoints.down("lg")] : {
            fontSize: "3.6em",
            fontWeight: "bold"
        },
        [theme.breakpoints.down("sm")] : {
            fontSize: "2.5em",
            fontWeight: "bold"
        },
        [theme.breakpoints.down("xs")] : {
            fontSize: "1.5em",
            fontWeight: "bold"
        },
    }, 
    font2: {
        fontFamily: "Fira Code",
        [theme.breakpoints.down("lg")] : {
            fontSize: "6em",
            fontWeight: "bold"
        },
        [theme.breakpoints.down("sm")] : {
            fontSize: "3em"
        },
        [theme.breakpoints.down("xs")] : {
            fontSize: "2em"
        }
    }, 
    font3: {
        fontFamily: "Oswald",
        [theme.breakpoints.down("lg")] : {
            fontSize: "1.5em",
        },
        [theme.breakpoints.down("sm")] : {
            fontSize: ".9em",
        },
        [theme.breakpoints.down("xs")] : {
            fontSize: "0.8em",
        },
    }, 
    heroBG: {
        backgroundImage: `radial-gradient(#FFFFFF  ,#9DB4FA )`,
        backgroundSize: "contain",
        backgroundPosition: "50% 50%" ,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100%",
        [theme.breakpoints.down('lg')]: {
            height: "100vh",
            backgroundSize: "100vw 90vh",
            backgroundPosition: "50% 100%" ,
        },
        [theme.breakpoints.down('sm')]: {
            height: "70vh",
            backgroundSize: "120vw 55vh",
            backgroundPosition: "50% 35%" ,
        },
        [theme.breakpoints.down('xs')]: {
            height: "65vh",
            width: "100%",
            backgroundPosition: "50% 28%" ,
            backgroundSize: "120% 45%",
        },
        // zIndex: -10
    },
    heroText: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
        marginRight: 12,
        [theme.breakpoints.down('xs')]: {
            alignItems: "flex-end",
            justifyContent: "center",
            paddingTop: "200px"
        },
        [theme.breakpoints.down('sm')]: {
            alignItems: "flex-end",
            justifyContent: "flex-start",
            paddingTop: "200px"
        }
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
        [theme.breakpoints.down('xs')]: {
            height: 25,
            width: 120,
            fontSize: 10
        }
    }
}))