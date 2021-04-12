import React from 'react';
import { connect } from 'react-redux';
import { openAddMovieForm } from '../../actions';
import './addMovie.scss';

const AddMovieButton = ({ openAddMovieForm }) => <button type="button" className="add-movie" onClick={openAddMovieForm}>+ Add Movie</button>;

const mapDispatchToProps = (dispatch) => ({
  openAddMovieForm: () => dispatch(openAddMovieForm()),
});

export default connect(null, mapDispatchToProps)(AddMovieButton);