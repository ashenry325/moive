import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavbarComponent from '../../../component/navbar';

import Copyright from '../../../component/footer';
import Hero from '../../../component/hero';

import useStyles from './style';
import Body from './card-body';


function Movie() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <NavbarComponent />
      <main className={classes.main}>
        {/* Hero unit */}
        <Hero />
        {/* End hero unit */}

        <Container className={classes.cardGrid} maxWidth="lg">
          <Typography component="h4" variant="h4" align="left" style={{ color: 'white' }} >List movie</Typography>
          <Body />
        </Container>

        {/* Footer */}
        <Copyright />
      </main>
    </>
  )
}

export default Movie;