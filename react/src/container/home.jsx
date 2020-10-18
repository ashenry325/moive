import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Detail from './pages/detail';
import Movie from './pages/movie';
import NotFound from './pages/not-found';


function Home(props) {

  return (

    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Movie}/>
          <Route path="/detail/:id" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>

      {/* End footer */}
    </React.Fragment>


  );
}

const mapStateToProps = (state) => {
  return {
      cards: state.card,
      Movie_List: state.Movie_List
  }
}

export default connect(mapStateToProps)(Home)