// ═══════════════════════════════════════════════════════════════════════════
// FOOTER — cierre editorial: nombre, navegación, contacto con ícono y redes
// con logotipos oficiales (Simple Icons vía react-icons).
// ═══════════════════════════════════════════════════════════════════════════

import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiMail } from 'react-icons/fi';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const EMAIL = 'oroquietaluciano@gmail.com';

const SOCIAL = [
    { label: 'GitHub', href: 'https://github.com/LucianoOroquietam', Icon: SiGithub },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/luciano-oroquieta', Icon: SiLinkedin },
];

const Footer = () => {
    const { translate } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container container">
                <Link to="/home" className="footer__wordmark" aria-label="Luciano, inicio">
                    Luciano<span>.</span>
                </Link>

                <div className="footer__grid">
                    <div className="footer__col">
                        <h3 className="footer__title">{translate('navHireCta')}</h3>
                        <p className="footer__tagline">{translate('footerTagline')}</p>
                    </div>

                    <div className="footer__col">
                        <span className="footer__label">{translate('contactEmailLabel')}</span>
                        <a href={`mailto:${EMAIL}`} className="footer__mail">
                            <FiMail aria-hidden="true" />
                            <span>{EMAIL}</span>
                        </a>
                    </div>

                    <div className="footer__col">
                        <span className="footer__label">{translate('contactSocialLabel')}</span>
                        <ul className="footer__social">
                            {SOCIAL.map(({ label, href, Icon }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer__social-link"
                                        aria-label={`${label} (se abre en una pestaña nueva)`}
                                    >
                                        <Icon aria-hidden="true" />
                                        <span>{label}</span>
                                        <FiArrowUpRight className="footer__social-arrow" aria-hidden="true" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <p className="footer__copy">
                    © {currentYear} Luciano Oroquieta. {translate('footerRights')}.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
