import React from 'react';
import Logo from '../logo/logo';
import AddMovie from '../addMovie/addMovie';
import Search from '../Search/Search';
import backgroundImage from '../../../assets/background.jpg';
import './header.scss';

const Header = () => (
  <header className="header">
    <div className="header__background">
      <img src={backgroundImage} alt="background" />
    </div>
    <div className="container">
      <div className="header__logo">
        <Logo />
        <AddMovie />
      </div>
      <div className="header__search">
        <Search />
      </div>
    </div>
  </header>
);

export default Header;