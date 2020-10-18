const fetch = require('node-fetch');
const express = require('express');
const api_key = require('../../api-key');
const router = express.Router();

/* GET get-last-data(with fillter genre). */
router.get('/get-last-data', function (req, res, next) {
    let page = req.body.page? req.body.page: '';
    let genre = req.body.genre? req.body.genre: '';
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => res.send(json));
});

/* GET Details movie. */
router.post('/get-detail-movie', function (req, res, next) {
    let movieId = req.body.movie_id ? req.body.movie_id : '';
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => res.send(json))
});



/* GET genre. */
router.get('/genre', function (req, res, next) {
    // res.send(req.body);
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => res.send(json));
});


/* GET Search by name(query). */
router.post('/search-by-name', function (req, res, next) {
    let query = req.body.query? req.body.query: '' ;
    let page = req.body.page? req.body.page: '';

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=${page}&include_adult=false`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => res.send(json));
});

module.exports = router;
