import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import API from '../../../Services';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(2),
        // textAlign: 'center',
        // color: theme.palette.text.secondary,
    },
    cardMedia: {

    },
    card_img: {
        height: '80vh',
    },
    media: {
        height: 140,
    },

}));


function Detail(props) {
    let id = props.match.params.id;
    let dataId = { "movie_id": id };
    const classes = useStyles();
    const [movieDetail, setMovieDetail] = useState({});
    const [isFetching, setIsFetching] = useState(false);

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    `;
    useEffect(() => {

        API.GetMovieDetail(dataId)
            .then((result) => {
                // console.log(result);
                setMovieDetail(result)
                setIsFetching(true);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    if (!isFetching) {
        return (
            <div className="sweet-loading">
                <ClipLoader
                    css={override}
                    size={150}
                    color={"#123abc"}
                    loading={true}
                />
            </div>

        )
    } else {
        console.log(movieDetail);
        let kosong = (<span style={{ display: "block" }} className={"under-desc font-weight-bold"}>-</span>);
        return (
            <Container maxWidth="lg">
                <CssBaseline />
                <Grid container spacing={4} style={{ marginTop: '20px' }}>
                    <Grid item md={4} style={{ marginBottom: '20px', color: 'white' }}>
                        <Card className={classes.card}>
                            <CardMedia className={`${classes.cardMedia} ${classes.card_img}`}
                                alt="Contemplative Reptile"
                                height="100vh"
                                image={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
                                title="Contemplative Reptile" />

                        </Card>
                    </Grid>

                    <Grid item md={8} style={{ marginBottom: '20px' }}>
                        {/* <Card className={classes.card}> */}
                        <CardContent className={classes.cardContent}>
                            <Typography className={"font-weight-bold"} gutterBottom align='center' >INTRODUCTION</Typography>
                            <Typography className={"judul"} gutterBottom variant="h5" align='center' >{movieDetail.title}</Typography>
                            <hr style={{marginBottom: "1rem"}} />
                            <Typography style={{marginBottom: "1rem"}} className={"under-desc font-weight-bold"} align='center'>Release date {movieDetail.release_date}</Typography>
                            <Typography className={"sinopsis sinopsis-first-letter"}>{movieDetail.overview}</Typography>
                            <Container style={{ marginTop: '1rem' }}>
                                <Grid container spacing={3}>

                                    <Grid item xs={3}>
                                        <span>production countries</span>
                                        {movieDetail.production_countries.length === 0 ? kosong: movieDetail.production_countries.map((countries, index) => (
                                            <span key={index} style={{ display: "block" }} className="under-desc font-weight-bold">{countries.name}</span>
                                        ))}
                                    </Grid>
                                    <Grid item xs={3}>
                                        <span>production companies</span>
                                        {movieDetail.production_companies.length === 0 ? kosong : movieDetail.production_companies.map((companies, index) => (
                                            <span style={{ display: "block" }} key={index} className="under-desc font-weight-bold">{companies.name}</span>
                                        ))}
                                    </Grid>
                                    <Grid item xs={3}>
                                        <span>Genre</span>
                                        {movieDetail.genres.length === 0 ? kosong : movieDetail.genres.map((genres, index) => (
                                            <span style={{ display: "block" }} key={index} className="under-desc font-weight-bold">{genres.name}</span>
                                        ))}
                                    </Grid>
                                    <Grid item xs={3}>
                                        <span>Spoken languages</span>
                                        {movieDetail.spoken_languages.length === 0 ? kosong : movieDetail.spoken_languages.map((spoken, index) => (
                                            <span key={index} style={{ display: "block" }} className="under-desc font-weight-bold">{spoken.name}</span>
                                        ))}

                                    </Grid>
                                    <Grid item xs={3}>
                                        <span>popularity</span>
                                        <span style={{ display: "block" }} className="under-desc font-weight-bold">{movieDetail.popularity}</span>

                                    </Grid>
                                    <Grid item xs={3}>
                                        <span>revenue</span>
                                        <span style={{ display: "block" }} className="under-desc font-weight-bold">{movieDetail.revenue}</span>

                                    </Grid>
                                    <Grid item xs={3}>
                                        <span>runtime</span>
                                        <span style={{ display: "block" }} className="under-desc font-weight-bold">{movieDetail.runtime}</span>

                                    </Grid>
                                    <Grid item xs={3}>
                                        <span>status</span>
                                        <span style={{ display: "block" }} className="under-desc font-weight-bold">{movieDetail.status}</span>

                                    </Grid>

                                </Grid>
                            </Container >
                        </CardContent>
                        <CardActions>
                            <Link to={'/'} style={{ textDecoration: "none" }}>
                                <Button variant="outlined" size="small" color="primary" className={'trans-btn-costome'} startIcon={<ArrowBackIcon />}> Back </Button>
                            </Link>
                        </CardActions>
                        {/* </Card> */}
                    </Grid>
                </Grid>

            </Container>

        )
    }

}




const mapStateToProps = (state) => {
    return {
        count: state.count,
        movie_list: state.movie_list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);