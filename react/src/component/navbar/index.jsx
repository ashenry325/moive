import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MovieFilterTwoToneIcon from '@material-ui/icons/MovieFilterTwoTone';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './style';
import { connect } from 'react-redux';
import API from '../../Services';
import ActionType from '../../Redux/globalActionType';



function NavbarComponent(props) {
    const classes = useStyles();

    const handleSearch = (event) => {
        let data = event.target.value;
        const dataByName = { query: data }
        if (dataByName.query !== "") {
            // console.log("data Ada");
            API.GetMovieByName(dataByName)
                .then(result => {
                    console.log(result)
                    props.GetMovieByName(result)
                    console.log(props.movie_list)
                })
        } else {
            // console.log("data kosong");
            API.GetLastData()
                .then(result => {
                    // console.log(1)
                    props.GetInitialDataMovie(result)
                })
        }

    }

    return (
        <div className={classes.grow} >
            <AppBar position="fixed" className={classes.appCostume}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MovieFilterTwoToneIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>Movie List </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            onChange={handleSearch}
                            placeholder="Find your movie...."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        movie_list: state.movie_list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetMovieByName: (newValue) => dispatch({ type: ActionType.GET_MOVIE_BY_NAME, payload: newValue }),
        GetInitialDataMovie: (newValue) => dispatch({ type: ActionType.INITIAL_GET_DATA_MOVIE, newValueRedux: newValue }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)