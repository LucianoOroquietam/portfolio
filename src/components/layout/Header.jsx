import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext'; // Usamos el contexto
import './header.css';

const Header = () => {
  const { language, changeLanguage, translate } = useLanguage();


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('no-scroll');
  };

  // con esto aseguro que si el usuario cambia de pag el menu se cierre
  useEffect(() => {
    return () => document.body.classList.remove('no-scroll');
  }, []);


  return (
    <>
    <header className="header">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </button>

      <Link to="/home" className="logo-container">
        <img className='logo' src="/images/Logos/logoConNombre.svg" alt="Logo" />
      </Link>

      <div className="right-section">
        <nav className={isOpen ? 'nav-open' : ''}>
          <ul>
            <li><NavLink to="/home" onClick={closeMenu}>{translate('navHome')}</NavLink></li>
            <li><NavLink to="/curriculum" onClick={closeMenu}>{translate('navCv')}</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>{translate('navContact')}</NavLink></li>
          </ul>
        </nav>

        <div className="language-selector-header pill-lang-selector">
          <button
            className={`pill-lang-btn${language === 'es' ? ' active' : ''}`}
            onClick={() => changeLanguage('es')}
            aria-label="Cambiar a español"
            type="button"
          >
            ES
          </button>
          <span className="pill-divider">|</span>
          <button
            className={`pill-lang-btn${language === 'en' ? ' active' : ''}`}
            onClick={() => changeLanguage('en')}
            aria-label="Switch to English"
            type="button"
          >
            EN
          </button>
        </div>
      </div>
    </header>

    </>

  );
};


export default Header;



