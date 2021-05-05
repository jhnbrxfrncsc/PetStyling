import React from 'react';

// MUI
import useStyles from './aboutUsStyles';
import {
    Box, 
    Grid, 
    Typography,
} from '@material-ui/core';

// React Icons
import { GiDogHouse, GiDogBowl, GiSniffingDog, GiSittingDog } from 'react-icons/gi';
import { FaDog, FaPaw } from 'react-icons/fa';

// Components
import AboutCard from './AboutCard';


const AboutUs = () => {
    const classes = useStyles();
    return (
        <>
            <Typography
                variant="h2"
                align="center"
                color="primary"
                className={classes.font1}
            >
                <b>ABOUT US</b>
            </Typography>
            <Grid container spacing={3} >
                <Grid item sm={6} xs={12}>
                    <Box className={classes.checkIn}/>
                </Grid>
                <Grid 
                    item 
                    sm={6} 
                    xs={12}
                    className={classes.rightSide}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        className={classes.checkInText}
                        gutterBottom
                    >
                        <b>CHECK-IN TIME</b>
                    </Typography>
                    <Grid 
                        item 
                        container 
                        spacing={2}
                    >
                        <Grid item container xs={12}>
                            {/* ICON */}
                            <Grid item xs={3}>
                                <Box
                                    className={classes.iconContainer}
                                >
                                    <GiDogHouse />
                                </Box>
                            </Grid>
                            <Grid 
                                item 
                                xs={8}
                                className={classes.checkInInfo}
                            >
                                <Typography
                                    variant="h6"
                                    className={classes.font2}
                                >
                                    <b>FROM 8AM TO 10PM</b>
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    color="textSecondary"
                                    className={classes.font3}
                                >
                                Timings are drop off after 8am and collection is before 10am on the morning of going home.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid 
                            item 
                            container 
                            xs={12}
                        >
                            {/* ICON */}
                            <Grid item xs={3}>
                                <Box
                                    className={classes.iconContainer}
                                >
                                    <GiDogBowl />
                                </Box>
                            </Grid>
                            <Grid 
                                item 
                                xs={8}
                                className={classes.checkInInfo}
                            >
                                <Typography
                                    variant="h6"
                                    className={classes.font2}
                                >
                                    <b>FAVOURITE TOYS</b>
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    color="textSecondary"
                                    className={classes.font3}
                                >
                                Even though we’re equipped with all sorts of toys, almost every dog has their favorites.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box
                className={classes.cardsContainer}
            >
                    <AboutCard 
                        icon={<FaDog className={classes.icon} />}
                        title="Location"  
                        subtitle="7114 Kundiman Street, Sampaloc
                        1008 Manila
                        Philippines"
                        btnTxt="VIEW MORE"
                    />
                    <AboutCard 
                        icon={<FaPaw className={classes.icon} />}
                        title="Contact"  
                        subtitle="Telephone: (02) 210-XXXX"
                        subtitle2="Cellphone: 0906-XXX-XXXX"
                        btnTxt="VIEW MORE"
                    />
                    <AboutCard 
                        icon={<GiSniffingDog className={classes.icon} />}
                        title="Pet Boarding"  
                        subtitle="While you're on holiday, here's where furry friends will spend their time."
                        btnTxt="BOOK NOW"
                    />
                    <AboutCard 
                        icon={<GiSittingDog className={classes.icon} />}
                        title="Groom"  
                        subtitle="Our groomers are well trained in grooming, so your beloved pup is in good hands. "
                        btnTxt="BOOK NOW"
                    />
            </Box>
        </>
    )
}

export default AboutUs;