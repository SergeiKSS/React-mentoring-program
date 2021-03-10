import React from 'react';
import movies from '../../../mockData/mockData'
import Movie from '../movie/movie';
import './movieList.scss';
import AddMovieForm from '../addMovieForm/addMovieForm';
import DeleteMovie from '../DeleteMovie/DeleteMovie';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAddEditForm: false,
      openDeleteForm: false,
      movieToEdit: {},
      moviesList: [],
    };

    this.editMovie = this.editMovie.bind(this);
    this.toggleEditMovieForm = this.toggleEditMovieForm.bind(this);
    this.toggleDeleteMovieForm = this.toggleDeleteMovieForm.bind(this);
  }

  componentDidMount() {
    this.setState({ moviesList: movies });
  }

  editMovie(id) {
    const { moviesList } = this.state;
    this.toggleEditMovieForm();
    this.setState({
      movieToEdit: moviesList.find((el) => el.id === id),
    });
  }

  toggleEditMovieForm() {
    const { openAddEditForm } = this.state;
    this.setState({ openAddEditForm: !openAddEditForm });
  }

  toggleDeleteMovieForm() {
    const { openDeleteForm } = this.state;
    this.setState({ openDeleteForm: !openDeleteForm });
  }

  render() {
    const {
      moviesList, movieToEdit, openAddEditForm, openDeleteForm,
    } = this.state;
    return (
      <section className="movie-list container">
        {openAddEditForm
          ? (
            <div className="form-wrapper">
              <AddMovieForm movie={movieToEdit} toggleForm={this.toggleEditMovieForm} />
            </div>
          ) : ''}
        {openDeleteForm
          ? (
            <div className="form-wrapper">
              <DeleteMovie toggleForm={this.toggleDeleteMovieForm} />
            </div>
          ) : ''}
        <div className="movie-list__movies-count">
          {moviesList.length} movies found
        </div>
        <div className="movie-list__list">
          {moviesList.map((movie) => (
            <Movie
              key={movie.id}
              data={movie}
              editMovie={this.editMovie}
              deleteMovie={this.toggleDeleteMovieForm}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default MovieList;