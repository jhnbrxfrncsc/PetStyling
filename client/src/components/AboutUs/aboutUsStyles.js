import { makeStyles } from '@material-ui/styles';
import checkInImg from '../../assets/img/model-1.png';


export default makeStyles(theme =>({
    font1: {
        padding: "50px 0",
        fontFamily: "Oswald",
        [theme.breakpoints.down('sm')] : {
            fontSize: "3.5em"
        }
    },
    font2: {
        fontFamily: "Fira Code",
        [theme.breakpoints.down('sm')] : {
            fontSize: "1.1em"
        }
    },
    font3: {
        fontFamily: "Lato",
        fontWeight: "bold",
        [theme.breakpoints.down('sm')] : {
            fontSize: ".85em"
        }
    },
    checkIn : {
        height: "300px",
        width: "300px",
        background: `url(${checkInImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        [theme.breakpoints.down('lg')] : {
            height: "500px",
            width: "500px",
            marginLeft: "70px",
        },
        [theme.breakpoints.down('md')] : {
            height: "400px",
            width: "400px",
            marginLeft: "40px",
        },
        [theme.breakpoints.down('sm')] : {
            height: "300px",
            width: "300px",
            marginLeft: "0px",
        },
        [theme.breakpoints.down('xs')] : {
            marginLeft: "80px",
        },
    },
    checkInText : {
        fontFamily: "Oswald",
        textDecoration: "underline",
        textAlign: "center",
        // fontSize: "3em",
        [theme.breakpoints.down('sm')] : {
            fontSize: "2em",
        }
    },
    iconContainer : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        color: "#fff",
        height: "70px",
        width: "70px",
        fontSize: "2.5em",
        borderRadius: "6em",
        margin: "auto",
        marginTop: "10px"
    },
    checkInInfo : {
        marginTop: 7,
    },
    rightSide: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        background: "linear-gradient(#ffffff  ,#9DB4FA )",
        width: 300,
        // height: 250,
        margin: "25px"
    },
    cardsContainer : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "12px",
    },
    icon : {
        [theme.breakpoints.up('md')]:{  
            fontSize: "1.5em",
        }
    }
}));