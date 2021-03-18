import React, { useState, useEffect } from 'react';
import Movie from '../movie/movie';
import MovieForm from '../movieForm/movieForm';
import DeleteMovie from '../deleteMovie/deleteMovie';
import './movieList.scss';
import movieList from '../../../mockData/mockData';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [openDeleteForm, setOpenDeleteForm] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState({});

  useEffect(() => {
    setMovies(movieList);
  }, []);

  const editMovie = (id) => {
    setOpenEditForm(!openEditForm);
    setMovieToEdit(movies.find((el) => el.id === id));
  };

  const toggleEditMovieForm = () => {
    setOpenEditForm(!openEditForm);
  };

  const toggleDeleteMovieForm = () => {
    setOpenDeleteForm(!openDeleteForm);
  };

  return (
    <section className="movie-list container">
      {openEditForm
        ? (
          <MovieForm movie={movieToEdit} toggleForm={toggleEditMovieForm} />
        ) : ''}
      {openDeleteForm
        ? (
          <DeleteMovie toggleForm={toggleDeleteMovieForm} />
        ) : ''}
      <div className="movie-list__movies-count">
        {movies.length}
        &nbsp;movies found
      </div>
      <div className="movie-list__list">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            data={movie}
            editMovie={editMovie}
            deleteMovie={toggleDeleteMovieForm}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;