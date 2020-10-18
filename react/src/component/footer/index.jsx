import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './style';

function Copyright() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>Movie List</Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">Thank you for visiting</Typography>
            <Typography variant="body2" color="textSecondary" align="center">{'Copyright © '}
                <Link color="inherit" href="http://henryas.com/">Henry As
                </Link>{' '}{new Date().getFullYear()}{'.'}
            </Typography>
        </footer>

    );
}

export default Copyright;