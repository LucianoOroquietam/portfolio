import React from 'react';
import githubIcon from '../../assets/social/github.png';
import linkedinIcon from '../../assets/social/linkedin.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <h2>Copyright &copy; 2025 Portfolio Luciano Oroquieta  Todos los derechos reservados.</h2>
      <div className='footer-links'>
        <a href="https://github.com/LucianoOroquietam" target="_blank" rel="noopener noreferrer">
          <img className='icons-links-footer' src={githubIcon} alt="Github"
          />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/luciano-oroquieta/" target="_blank" rel="noopener noreferrer">
          <img className='icons-links-footer' src={linkedinIcon} alt="Linkedin"
          />
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
