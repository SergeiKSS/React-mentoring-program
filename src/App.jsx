import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import MovieInfo from './components/movieInfo/movieInfo';
import './styles.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <MovieInfo />
        </Route>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
      <Main />
      <Footer />
    </Router>
  )
}

export default App