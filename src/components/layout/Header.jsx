// ═══════════════════════════════════════════════════════════════════════════
// HEADER — Premium Navigation 2026
// Glassmorphism with Modern Interactions
// ═══════════════════════════════════════════════════════════════════════════

import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FiMenu, FiX, FiMail } from 'react-icons/fi';
import './Header.css';

const Header = () => {
    const { language, changeLanguage, translate } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('no-scroll', !isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.classList.remove('no-scroll');
    };

    // Clean up on unmount
    useEffect(() => {
        return () => document.body.classList.remove('no-scroll');
    }, []);

    const navLinks = [
        { to: '/home', label: translate('navHome') },
        { to: '/curriculum', label: translate('navCv') },
        { to: '/contact', label: translate('navContact') },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            x: '100%',
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, x: 20 },
        open: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.1 + 0.2 }
        })
    };

    return (
        <>
            <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
                <div className="header__container container">
                    {/* Logo */}
                    <Link to="/home" className="header__logo" onClick={closeMenu}>
                        <div className="header__logo-mark">LO</div>
                        <span className="header__logo-text">Luciano<span>.</span></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            {navLinks.map((link) => (
                                <li key={link.to}>
                                    <NavLink 
                                        to={link.to} 
                                        className={({ isActive }) => 
                                            `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                                        }
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right Section */}
                    <div className="header__right">
                        {/* Language Toggle */}
                        <div className="header__lang-toggle">
                            <button
                                className={`header__lang-btn ${language === 'es' ? 'header__lang-btn--active' : ''}`}
                                onClick={() => changeLanguage('es')}
                                aria-label="Español"
                            >
                                ES
                            </button>
                            <span className="header__lang-divider">/</span>
                            <button
                                className={`header__lang-btn ${language === 'en' ? 'header__lang-btn--active' : ''}`}
                                onClick={() => changeLanguage('en')}
                                aria-label="English"
                            >
                                EN
                            </button>
                        </div>

                        {/* CTA Button */}
                        <Link to="/contact" className="header__cta btn btn-primary btn-sm">
                            <FiMail />
                            <span>{translate('navHireCta')}</span>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button 
                            className="header__menu-toggle"
                            onClick={toggleMenu}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div 
                            className="header__backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                        />

                        {/* Mobile Navigation */}
                        <motion.div 
                            className="header__mobile-nav"
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <nav className="header__mobile-nav-inner">
                                <ul className="header__mobile-nav-list">
                                    {navLinks.map((link, i) => (
                                        <motion.li 
                                            key={link.to}
                                            custom={i}
                                            variants={linkVariants}
                                            initial="closed"
                                            animate="open"
                                        >
                                            <NavLink 
                                                to={link.to} 
                                                className={({ isActive }) => 
                                                    `header__mobile-nav-link ${isActive ? 'header__mobile-nav-link--active' : ''}`
                                                }
                                                onClick={() => {
                                                    closeMenu();
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                            >
                                                {link.label}
                                            </NavLink>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Mobile Language Toggle */}
                                <motion.div 
                                    className="header__mobile-lang"
                                    variants={linkVariants}
                                    custom={navLinks.length}
                                    initial="closed"
                                    animate="open"
                                >
                                    <button
                                        className={`header__mobile-lang-btn ${language === 'es' ? 'header__mobile-lang-btn--active' : ''}`}
                                        onClick={() => { changeLanguage('es'); closeMenu(); }}
                                    >
                                        Español
                                    </button>
                                    <button
                                        className={`header__mobile-lang-btn ${language === 'en' ? 'header__mobile-lang-btn--active' : ''}`}
                                        onClick={() => { changeLanguage('en'); closeMenu(); }}
                                    >
                                        English
                                    </button>
                                </motion.div>

                                {/* Mobile CTA */}
                                <motion.div
                                    variants={linkVariants}
                                    custom={navLinks.length + 1}
                                    initial="closed"
                                    animate="open"
                                >
                                    <Link 
                                        to="/contact" 
                                        className="header__mobile-cta btn btn-primary btn-lg"
                                        onClick={closeMenu}
                                    >
                                        <FiMail />
                                        {translate('navHireCta')}
                                    </Link>
                                </motion.div>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
