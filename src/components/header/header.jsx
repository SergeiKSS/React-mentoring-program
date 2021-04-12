import React from 'react';
import { connect } from 'react-redux';
import Logo from '../logo/logo';
import AddMovieButton from '../addMovie/addMovie';
import Search from '../Search/Search';
import AddMovieForm from '../addMovie/addMovie';
import HeaderBackground from '../headerBackground/headerBackground';
import './header.scss';

const Header = ({ openAddMovieForm }) => {

  return (
    <>
      {openAddMovieForm
        ? (
            <AddMovieForm />
        )
        : ''}
      <header className="header">
        <HeaderBackground />
        <div className="container">
          <div className="header__logo-panel">
            <Logo />
            <AddMovieButton />
          </div>
          <div className="header__search-panel">
            <Search />
          </div>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => ({
  openAddMovieForm: state.openMovieCreateForm,
});

export default connect(mapStateToProps)(Header);