import React, { } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { PageviewOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from '../style';
// import API from '../../../../Services';
// import ActionType from '../../../../Redux/globalActionType';

function Body({ isFetching, movie_list }) {

    // const [data, setData] = useState(0);

    // console.log(movie_list.results[1])
    const classes = useStyles();
    //movie_list.hasOwnProperty('results')
    if (movie_list.results.length ===0) {
        console.log('data kosong')
        return (
            <Grid container spacing={2} style={{ marginTop: '20px', color: 'white' }}>
                <Typography gutterBottom variant="h5" component="h5">Data Not Found</Typography>
            </Grid>
           
        )
    } else {
        return (
            <>
                {/* <p style={{ color: 'white' }}>{JSON.stringify(movie_list)}</p>  */}
                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                    {movie_list.results.map((movie, index) => (
                        <Grid item key={index} xs={12} sm={6} md={3} style={{ marginBottom: '20px', color: 'white' }}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia} image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} title={movie.title} />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">{movie.title}</Typography>
                                    <Typography>{movie.overview.substring(0, 100)}...</Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to={`/detail/${movie.id}`} style={{ textDecoration: "none" }}>
                                        <Button variant="outlined" size="small" color="primary" className={'trans-btn-costome'} startIcon={<PageviewOutlined />}> View </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </>
        )
    }

}



const mapStateToProps = (state) => {
    return {
        cards: state.card,
        isFetching: state.movie_list.isFetching,
        movie_list: state.movie_list.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // INITIAL_GET_DATA_MOVIE_2: (newData) => dispatch({ type: ActionType.INITIAL_GET_DATA_MOVIE_2, newValueRedux: newData })
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Body);