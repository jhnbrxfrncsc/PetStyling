import React from 'react';

// Material UI
import useStyles from './footerStyles';
import {
    Box, 
    Typography
} from '@material-ui/core';

// Icons
import { 
    FaTwitter, 
    FaInstagram, 
    FaFacebookF, 
    FaFacebookMessenger,
    FaPaw 
} from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { AiFillPhone } from 'react-icons/ai';
import { MdStore } from 'react-icons/md';
import { GiDogHouse } from 'react-icons/gi';


const Footer = () => {
    const classes = useStyles();
    return (
        <Box
            height="100%"
        >
            <Box className={classes.model} />
            <Box
                className={classes.footer}
            >
                <Box
                    className={classes.topSide}
                >
                    <Box className={classes.logo} />
                    <Box
                        className={classes.socials}
                    >
                        <Box
                            m="0px 12px"
                        >
                            <FaFacebookF />
                        </Box>
                        <Box
                            m="0px 12px"
                        >
                            <FaInstagram />
                        </Box>
                        <Box
                            m="0px 12px"
                        >
                            <FaTwitter />
                        </Box>
                        <Box
                            m="0px 12px"
                        >
                            <FaFacebookMessenger />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.line} />
                <Box
                    className={classes.botSide}
                >
                    <Box className={classes.about}>
                        <Typography
                            variant="h4"
                            className={classes.font1}
                        >
                            <b>About</b>
                        </Typography>
                        <Box
                            className={classes.aboutInfo}
                        >
                            <ImLocation />
                            <Typography
                                variant="h6"
                                className={classes.font1}
                            >
                                Antipolo, Rizal
                            </Typography>
                        </Box>
                        <Box
                            className={classes.aboutInfo}
                        >
                            <AiFillPhone />
                            <Typography
                                variant="h6"
                                className={classes.font1}
                            >
                                +0909 XX XXXX
                            </Typography>
                        </Box>
                        <Box
                            className={classes.aboutInfo}
                        >
                            <MdStore />
                            <Typography
                                variant="h6"
                                className={classes.font1}
                            >
                                MON-SUN: 8am-6pm
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.quickLinks}>
                        <Typography
                            variant="h4"
                            className={classes.font1}
                        >
                            <b>Quick Links</b>
                        </Typography>
                        <Box
                            className={classes.aboutInfo}
                        >
                            <GiDogHouse />
                            <Typography
                                variant="h6"
                                className={classes.font1}
                            >
                                <u>Pet Boarding Services</u>
                            </Typography>
                        </Box>
                        <Box
                            className={classes.aboutInfo}
                        >
                            <FaPaw />
                            <Typography
                                variant="h6"
                                className={classes.font1}
                            >
                                <u>Pet Grooming Services</u>
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.bookNow} />
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;
