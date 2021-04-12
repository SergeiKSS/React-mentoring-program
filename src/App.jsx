import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import MovieInfo from './components/movieInfo/movieInfo';
import rootReducer from './reducers';

import './styles.scss';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App