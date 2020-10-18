import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core/';
import useStyles from './style';
import imgHero from './img-hero.jpg';
import { connect } from 'react-redux';

function Hero({ genres }) {
    const classes = useStyles();
    


    return (
        <div className={classes.root}>
            <Grid item xs={12} className={classes.parentHero} style={{ position: 'relative' }}>
                <img src={imgHero} className={classes.imgHero} alt="img" />
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" gutterBottom>Welcome my Aplication</Typography>
                    <Typography align="center" paragraph>Millions of movies, TV shows and people to discover. Explore now.</Typography>
                    <Grid container spacing={2} justify="center">
                        {genres && genres.genres && genres.genres.map((data, index) => (
                            <Grid item key={data.id}>
                                <Button variant="outlined" color="primary" className={'trans-btn-costome,'}>{data.name}</Button>
                            </Grid>

                        ))}
                    </Grid>
                </div>
            </Grid>
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        genres: state.genre
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero);