import React from 'react';
import useStyles from './aboutUsStyles';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Typography
} from '@material-ui/core';

const AboutCard = ({ icon, title, subtitle, subtitle2, btnTxt }) => {
    const classes = useStyles();
    return (
        <Card
            className={classes.card}
        >
            <CardHeader
                title={icon}
            />
            <CardContent>
                <Typography
                    variant="h5"
                    className={classes.font2}
                >
                    <strong>{title}</strong>
                </Typography>
                <Typography
                    variant="body2"
                    className={classes.font3}
                >
                    {subtitle}
                </Typography>
                {
                    subtitle2 ? (
                        <Typography
                            variant="body2"
                            className={classes.font3}
                        >
                            {subtitle2}
                        </Typography>
                    ) : null
                }
            </CardContent>
            <CardActions>
                <Button size="small">
                    <u>{btnTxt}</u>
                </Button>
            </CardActions>
        </Card>
    )
}

export default AboutCard;
