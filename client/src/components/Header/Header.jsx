import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
    AppBar,
    Box,
    // Fade,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';
import useStyles from './headerStyles';

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const classes = useStyles({
        right: openNav ? "0%" : "-100%"
    });

    const handleNav = () => {
        setOpenNav(!openNav);
    }
    return (
        <AppBar 
            position="fixed"
        >
            <Toolbar
                className={classes.navbar}
            >
                <Box className={classes.navicon} />
                {/* <Fade in={openNav} timeout={2000}> */}
                <Box className={classes.navlinks}>
                    <Typography 
                        variant="h5" 
                        color="secondary"
                        className={classes.navtext}
                    >
                        HOME
                    </Typography>
                    <Typography 
                        variant="h5" 
                        color="secondary"
                        className={classes.navtext}
                    >
                        ABOUT
                    </Typography>
                    <Typography 
                        variant="h5" 
                        color="secondary"
                        className={classes.navtext}
                    >
                        SERVICES
                    </Typography>
                    <Typography 
                        variant="h5" 
                        color="secondary"
                        className={classes.navtext}
                    >
                        CONTACT US
                    </Typography>
                </Box>
                {/* </Fade> */}
                <Box className={classes.navbtn} />
                <IconButton 
                    color="inherit"
                    className={classes.menuBtn}
                    onClick={handleNav}
                >
                    <GiHamburgerMenu />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
