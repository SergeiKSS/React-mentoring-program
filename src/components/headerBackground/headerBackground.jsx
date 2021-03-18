import React from 'react';
import backgroundImage from '../../../assets/background.jpg';

import './headerBackground.scss';

const HeaderBackground = () => (
  <div className="header-background">
    <img src={backgroundImage} alt="background" />
  </div>
);

export default HeaderBackground;