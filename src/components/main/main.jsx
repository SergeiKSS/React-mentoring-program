import React from 'react';
import SortingPanel from '../sortingPanel/sortingPanel';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import MovieList from '../movieList/movieList'

const Main = () => (
  <>
    <SortingPanel />
    <ErrorBoundary>
      <MovieList />
    </ErrorBoundary>
  </>
);

export default Main;