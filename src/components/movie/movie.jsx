import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './movie.scss';

const Movie = (props) => {
  const { data, editMovie, deleteMovie } = props;
  const { id, title, path, tagline, date } = data;
  const [showOptionsFlag, showOptions] = useState(false);

  return (
    <div className="movie">
      <div className="movie__dots" onClick={() => showOptions(true)} role="button" />
      { showOptionsFlag
        ? (
          <div className="movie__options">
            <span className="movie__options-close" onClick={() => showOptions(false)} role="button">&#10006;</span>
            <ul>
              <li onClick={() => editMovie(id)}>Edit</li>
              <li onClick={() => deleteMovie(id)}>Delete</li>
            </ul>
          </div>
        )
        : ''}
      <img src={path} alt={title} />
      <div className="movie__info">
        <div>
          <div className="movie__info-name">
            <Link to={`/movie/${id}`}>{title}</Link>
          </div>
          <div className="movie__info-tagline">
            {tagline}
          </div>
        </div>
        <div className="movie__release">
          {date}
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  data: PropTypes.object.isRequired,
  editMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

export default Movie;