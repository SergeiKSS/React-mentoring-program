import React from 'react';
import './addMovie.scss';

const AddMovieButton = (props) => <button type="button" className="add-movie" onClick={props.toggleForm}>+ Add Movie</button>;

export default AddMovieButton;