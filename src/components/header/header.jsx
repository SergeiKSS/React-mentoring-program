import React from 'react';
import Logo from '../logo/logo';
import AddMovie from '../addMovie/addMovie';
import Search from '../Search/Search';
import AddMovieForm from '../addMovieForm/addMovieForm';
import backgroundImage from '../../../assets/background.jpg';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAddMovieForm: false,
    };

    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    const { openAddMovieForm } = this.state;
    this.setState({ openAddMovieForm: !openAddMovieForm });
  }

  render() {
    const { openAddMovieForm } = this.state;
    return (
      <>
        {openAddMovieForm
          ? (              
            <div className="form-wrapper">
              <AddMovieForm toggleForm={this.toggleForm} />
            </div>
            )
          : ''}
        <header className="header">
          <div className="header__background">
            <img src={backgroundImage} alt="background" />
          </div>
          <div className="container">
            <div className="header__logo">
              <Logo />
              <AddMovie toggleForm={this.toggleForm} />
            </div>
            <div className="header__search-panel">
              <Search />
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;