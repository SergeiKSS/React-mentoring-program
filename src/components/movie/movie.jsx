import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './movie.scss';

const Movie = (props) => {
  const { data } = props;
  const { title, path, tagline, date } = data;

  return (
    <div className="movie">
      <img src={path} alt={title} />
      <div className="movie__info">
        <div>
          <div className="movie__info-name">
            {title}
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
};

export default Movie;