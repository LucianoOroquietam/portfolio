// ═══════════════════════════════════════════════════════════════════════════
// FOOTER — Premium Design 2026
// ═══════════════════════════════════════════════════════════════════════════

import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
    const { translate } = useLanguage();
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { 
            icon: <FiGithub />, 
            href: 'https://github.com/LucianoOroquietam', 
            label: 'GitHub' 
        },
        { 
            icon: <FiLinkedin />, 
            href: 'https://linkedin.com/in/luciano-oroquieta', 
            label: 'LinkedIn' 
        },
        { 
            icon: <FiMail />, 
            href: 'mailto:oroquietaluciano@gmail.com', 
            label: 'Email' 
        },
    ];

    const navLinks = [
        { to: '/home', label: translate('navHome') },
        { to: '/curriculum', label: translate('navCv') },
        { to: '/contact', label: translate('navContact') },
    ];

    return (
        <footer className="footer">
            <div className="footer__container container">
                {/* Top Section */}
                <div className="footer__top">
                    {/* Brand */}
                    <div className="footer__brand">
                        <Link to="/home" className="footer__logo">
                            <div className="footer__logo-mark">LO</div>
                            <span className="footer__logo-text">Luciano<span>.</span></span>
                        </Link>
                        <p className="footer__tagline">{translate('footerTagline')}</p>
                    </div>

                    {/* Navigation */}
                    <nav className="footer__nav">
                        <h4 className="footer__nav-title">Links</h4>
                        <ul className="footer__nav-list">
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} className="footer__nav-link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social */}
                    <div className="footer__social">
                        <h4 className="footer__social-title">{translate('contactSocialLabel')}</h4>
                        <div className="footer__social-links">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__social-link"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer__divider" />

                {/* Bottom Section */}
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} Luciano Oroquieta. {translate('footerRights')}.
                    </p>
                    <p className="footer__built-with">
                        {translate('footerBuiltWith')} <FiHeart className="footer__heart" /> {translate('footerAnd')} React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
