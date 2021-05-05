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
                className={classes.groomContainer}
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
                    <Button
                        variant="contained"
                        // color="secondary"
                        className={classes.btn}
                    >
                        BOOK NOW
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Services
