import React, { useState } from 'react';
import Logo from '../logo/logo';
import AddMovieButton from '../addMovie/addMovie';
import Search from '../Search/Search';
import AddMovieForm from '../addMovie/addMovie';
import HeaderBackground from '../headerBackground/headerBackground';
import './header.scss';

const Header = () => {
  const [openAddMovieForm, toggleForm] = useState(false);

  return (
    <>
      {openAddMovieForm
        ? (
            <AddMovieForm toggleForm={toggleForm} />
        )
        : ''}
      <header className="header">
        <HeaderBackground />
        <div className="container">
          <div className="header__logo-panel">
            <Logo />
            <AddMovieButton toggleForm={toggleForm} />
          </div>
          <div className="header__search-panel">
            <Search />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;