import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './container/home'
import * as serviceWorker from './serviceWorker';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
// import thunk from 'redux-thunk';
import rootReducer from './Redux/globalReducer';
import ActionType from './Redux/globalActionType'
import API from './Services';

let storeRedux;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  storeRedux = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
} else {
  storeRedux = createStore(rootReducer);
}


// initial fatch data api and fatch data pre rendering react
const gatDataMovie = () => {
  API.GetLastData()
    .then(result => {
      // console.log(1)
      storeRedux.dispatch({ type: ActionType.INITIAL_GET_DATA_MOVIE, newValueRedux: result })
    }).then(() => getDataGenres())
}
const getDataGenres = () => {
  API.GetGenreMovies()
    .then(result => {
      // console.log(2)
      storeRedux.dispatch({ type: ActionType.INITIAL_GET_GENRE_MOVIE, newValueRedux: result });
    }).then(() => renderReact())
}

const renderReact = () => {
  // console.log(3)
  ReactDOM.render(
    <Provider store={storeRedux}>
      <Home />
    </Provider>,
    document.getElementById('root')
  );
  serviceWorker.unregister();
}

gatDataMovie();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
