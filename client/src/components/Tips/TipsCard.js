import React from 'react';
// Material UI
import useStyles from './tipsStyles';
import {
    Box,
    Typography
} from '@material-ui/core';

// Icons
import { FaCheck } from 'react-icons/fa';

const TipsCard = ({ 
    title, 
    description1,  
    description2,
    description3,
    description4,
}) => {
    const classes = useStyles();
    return (
        <Box
            className={classes.tipsWrapper}
        >
            <Box className={classes.icon}>
                <FaCheck />
            </Box>
            <Box
                display="flex"
                flexDirection="column"
            >
                <Typography
                    variant="h5"
                    color="primary"
                    className={classes.font3}
                >
                    <b><u>{ title }</u></b>
                </Typography>
                <Typography
                    variant="subtitle2"
                    className={classes.font4}
                >
                    { description1 }
                </Typography>
                {
                    description2 ? (
                        <Typography
                            variant="subtitle2"
                            className={classes.font4}
                        >
                            { description2 }
                        </Typography>
                    )
                    : null
                }
                {
                    description2 ? (
                        <Typography
                            variant="subtitle2"
                            className={classes.font4}
                        >
                            { description3 }
                        </Typography>
                    )
                    : null
                }
                {
                    description2 ? (
                        <Typography
                            variant="subtitle2"
                            className={classes.font4}
                        >
                            { description4 }
                        </Typography>
                    )
                    : null
                }
            </Box>
        </Box>
    )
}

export default TipsCard
