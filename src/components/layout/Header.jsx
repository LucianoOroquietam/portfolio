// src/components/Header.jsx
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext'; // Usamos el contexto
import './header.css';

const Header = () => {
  const { translate } = useLanguage(); // Solo obtenemos la función de traducción

  return (
    <header className="header">
      <button className="menu-toggle">☰</button>

      <Link to={'/home'}>
        <div className="logo">
          <span>L</span>
          <h3>
            Luciano <br />
            Oroquieta <br />
            Merlino
          </h3>
        </div>
      </Link>

      <nav>
        <ul>
          <li><NavLink to={'/home'}>{translate('navHome')}</NavLink></li>
          <li><NavLink to={'/curriculum'}>{translate('navCv')}</NavLink></li>
          <li><NavLink to={'/contact'}>{translate('navContact')}</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
