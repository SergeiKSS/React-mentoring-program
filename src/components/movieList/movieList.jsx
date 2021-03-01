import React from 'react';
import movies from '../../../mockData/mockData'
import Movie from '../movie/movie';
import './movieList.scss';

const MovieList = () => (
  <section className="movie-list container">
    <div className="movie-list__movies-count">
      {movies.length} movies found
    </div>
    <div className="movie-list__list">
      {movies.map((movie) => <Movie key={movie.id} data={movie} />)}
    </div>
  </section>
);

export default MovieList;