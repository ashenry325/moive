import Axios from 'axios';

let BaseUrl
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    BaseUrl = 'http://localhost:3001/api';
} else {
    BaseUrl = '/api/';
}

const RoutUrls = {
    GetLastData: `${BaseUrl}/get-last-data`,
    GetGenreMovies: `${BaseUrl}/genre`,
    GetMovieDetail: `${BaseUrl}/get-detail-movie`,
    GetMovieByName: `${BaseUrl}/search-by-name`
}



function Get(url, data) {
    let params = data === undefined ? '' : data;
    // console.log(params)
    const promise = new Promise((resolve, reject) => {
        Axios.get(url,{
            data: JSON.stringify(params)
        })
            .then(result => {
                // console.log(result)
                resolve(result.data)
            }, (err) => reject(err))
        // .catch(err => console.log('error: ', err));
    })
    return promise;
}

function Post(url, data) {
    let params = data === undefined ? '' : data;
    const promise = new Promise((resolve, reject) => {
        Axios({
            method: 'POST',
            url:url,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            data:JSON.stringify(params)
          })
            .then((result)=> {
                resolve(result.data)
            }).catch((err)=> reject(err));
    })
    return promise;

}

const GetLastData = (param) => Get(RoutUrls.GetLastData, param);
const GetGenreMovies = (param) => Get(RoutUrls.GetGenreMovies, param);
const GetMovieDetail = (param) => Post(RoutUrls.GetMovieDetail, param);
const GetMovieByName = (param) => Post(RoutUrls.GetMovieByName, param);
const API = {
    GetLastData,
    GetGenreMovies,
    GetMovieDetail,
    GetMovieByName
}

export default API;