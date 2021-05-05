import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './heroStyles';

const Hero = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.heroBG}>
                <Box 
                    className={classes.heroText}  
                >
                    <Typography 
                        variant="h2"
                        className={classes.font2}
                    >
                        <b>WELCOME TO</b>
                    </Typography>
                    <Typography 
                        variant="h3"
                        className={classes.font1}
                    >
                        <b>PET STYLING </b>
                    </Typography>
                    <Typography 
                        variant="subtitle1"
                        className={classes.font3}
                    >
                        let us take care of your babies, so you can have a worry free time
                    </Typography>
                    
                    <Button
                        variant="contained"
                        size="large"
                        className={classes.btn}
                    >
                        EXPLORE NOW
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Hero
