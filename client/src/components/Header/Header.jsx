import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography
} from '@material-ui/core';
import useStyles from './headerStyles';

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const classes = useStyles({
        top: openNav ? "16vh" : "-100vh"
    });

    const handleNav = () => {
        setOpenNav(!openNav);
    }
    return (
        <AppBar 
            position="static"
        >
            <Toolbar
                className={classes.navbar}
            >
                <Box className={classes.navicon} />
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
