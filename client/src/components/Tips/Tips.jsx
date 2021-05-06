import React from 'react';

// Material UI
import useStyles from './tipsStyles';
import {
    Box,
    Typography
} from '@material-ui/core';
import TipsCard from './TipsCard';

const Tips = () => {
    const classes = useStyles();
    return (
        <Box p={5}>
            <Typography
                align="center"
                variant="h4"
                className={classes.font1}
            >
                TIPS & TRICKS
            </Typography>
            <Typography
                align="center"
                variant="h2"
                className={classes.font2}
            >
                <b>WHAT TO BRING</b>
            </Typography>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    className={classes.tipsContainer}
                >
                    <TipsCard 
                        title= "Bring Your Own Food"
                        description1= "Use small plastic baggies to package"
                        description2= "pre-measured meals and label them"
                        description3= "Breakfast, Lunch and Dinner."
                    />
                    <TipsCard 
                        title= "At least 1 leash"
                        description1= "It's always a good idea to include 2"
                        description2= "in case the other is lost. If you don't "
                        description3= "have more than one, we'll give you."
                    />
                    <TipsCard 
                        title= "Documents Required"
                        description1= "Be sure that all required documents "
                        description2= "and forms are ready to present on "
                        description3= "drop off day"
                    />
                    <TipsCard 
                        title= "A reminder of Home"
                        description1= "To keep your dog feeling close to "
                        description2= "you even in your absence, include "
                        description3= "something with your scent, ex. scarf."
                    />
                    <TipsCard 
                        title= "Favorite toys"
                        description1= "Even though we're equipped with all"
                        description2= "sorts of toys, almost every dog has"
                        description3= "ther favorites that they just can't live"
                        description4= "without."
                    />
                    <TipsCard 
                        title= "Medicine/Supplements"
                        description1= "Make sure to include the "
                        description2= "appropriate number of doses that"
                        description3= "your dog will need to take in you"
                        description4= "absence."
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Tips;
