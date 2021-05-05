import { makeStyles } from '@material-ui/styles';
import navIcon from '../../assets/img/logo-1.png';
import numberIcon from '../../assets/img/number.png';

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
    navbar: {
        height: "16vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 1
    },
    navtext: {
        fontFamily: "'Oswald', monospace",
        color: "#000",
        margin: "0 12px",
        fontWeight: "bold",
        [theme.breakpoints.down("sm")] :{
            margin: "25px 0",
        }
    },
    font2: {
        fontFamily: "'Lato', sans-serif"
    },
    font3 : {
        fontFamily: "'Fira Code', sans-serif"
    },
    navicon: {
        backgroundImage: `url(${navIcon})`,
        backgroundSize: "cover",
        backgroundPosition: "center" ,
        backgroundRepeat: "no-repeat",
        height: "100px",
        width: "100px",
    },
    navlinks: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",
        width: "500px",
        zIndex: 2,
        [theme.breakpoints.down("sm")] : {
            position: "absolute",
            right: props => props.right ,
            top: "16vh",
            height: "56vh",
            width: "100%",
            flexDirection: "column",
            transition: "all 1s ease",
            background: "#c4c4c4"
        }
    },
    navbtn: {
        backgroundImage: `url(${numberIcon})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center" ,
        height: "90px",
        width: "200px",
        cursor: "pointer",
        animation: `$numberAnimation 3000ms infinite`,
    },
    menuBtn : {
        display: "none",
        [theme.breakpoints.down('sm')] : {
            display: "block",
        }
    }
}))