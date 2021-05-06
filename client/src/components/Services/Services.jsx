import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './serviceStyles';

const Services = () => {
    const classes = useStyles();
    return (
        <Box 
            className={classes.root}
        >
            <Typography
                variant="h2"
                align="center"
                gutterBottom
                className={classes.font1}
            >
                <strong>SERVICES</strong>
            </Typography>
            <Box
                className={classes.container}
            >
                <Box className={classes.groomService} />
                <Box
                    className={classes.groomInfo}
                >
                    <Typography
                        variant="h4"
                        className={classes.font2}
                    >
                        <strong>PET GROOMING</strong>
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                        className={classes.font3}
                    >
                        our company is dedicated pet grooming area includes <br/> several experienced pet stylists, massage therapists and carers.
                    </Typography>
                    <Box
                        display="flex"
                    >
                        <Box className={classes.wrapper}>
                            <Box className={classes.groomingBath} />
                            <Typography
                                align="center"
                                style={{ fontFamily: "Oswald" }}
                            >
                                <b>BATH</b>
                            </Typography>
                        </Box>
                        <Box className={classes.wrapper}>
                            <Box className={classes.groomingHaircut} />
                            <Typography
                                align="center"
                                style={{ fontFamily: "Oswald" }}
                            >
                                <b>HAIRCUT</b>
                            </Typography>
                        </Box>
                    </Box>
                    <Button
                        variant="contained"
                        className={classes.btn}
                    >
                        BOOK NOW
                    </Button>
                </Box>
            </Box>
            <Box
                className={classes.container}
            >
                <Box
                    className={classes.boardingInfo}
                >
                    <Typography
                        variant="h4"
                        className={classes.font2}
                    >
                        <strong>PET BOARDING</strong>
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        gutterBottom
                        className={classes.font3}
                    >
                        We offer long-term and short-term boarding.<br/> Every dog has its own private, spacious room, and spa.
                    </Typography>
                    <Box
                        display="flex"
                    >
                        <Box className={classes.wrapper}>
                            <Box className={classes.boardingEat} />
                            <Typography
                                align="center"
                                style={{ fontFamily: "Oswald" }}
                            >
                                <b>EAT</b>
                            </Typography>
                        </Box>
                        <Box className={classes.wrapper}>
                            <Box className={classes.boardingPlay} />
                            <Typography
                                align="center"
                                style={{ fontFamily: "Oswald" }}
                            >
                                <b>PLAY</b>
                            </Typography>
                        </Box>
                        <Box className={classes.wrapper}>
                            <Box className={classes.boardingSleep} />
                            <Typography
                                align="center"
                                style={{ fontFamily: "Oswald" }}
                            >
                                <b>SLEEP</b>
                            </Typography>
                        </Box>
                    </Box>
                    <Button
                        variant="contained"
                        className={classes.btn}
                    >
                        BOOK NOW
                    </Button>
                </Box>
                <Box className={classes.boardingService} />
            </Box>
        </Box>
    )
}

export default Services
