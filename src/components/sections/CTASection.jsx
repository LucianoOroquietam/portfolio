// ═══════════════════════════════════════════════════════════════════════════
// CTA — contacto directo y visible (email, formulario, LinkedIn, GitHub, CV)
// ═══════════════════════════════════════════════════════════════════════════

import { Link } from 'react-router-dom';
import { FiMail, FiArrowRight, FiLinkedin, FiGithub, FiDownload } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import Reveal from '../ui/Reveal';
import './CTASection.css';

const EMAIL = 'oroquietaluciano@gmail.com';

const CTASection = () => {
    const { translate } = useLanguage();

    return (
        <section className="cta section" id="contact" aria-labelledby="cta-title">
            <div className="container">
                <Reveal className="cta__panel" y={24}>
                    <div className="cta__main">
                        <h2 className="cta__headline" id="cta-title">{translate('contactHeadline')}</h2>
                        <p className="cta__sub">{translate('contactSubheadline')}</p>
                    </div>

                    <div className="cta__side">
                        <a href={`mailto:${EMAIL}`} className="cta__email">{EMAIL}</a>

                        <Link to="/contact" className="btn btn-primary btn-lg">
                            <FiMail />
                            {translate('heroCtaTertiary')}
                            <FiArrowRight />
                        </Link>

                        <ul className="cta__links">
                            <li>
                                <a href="https://www.linkedin.com/in/luciano-oroquieta" target="_blank" rel="noopener noreferrer">
                                    <FiLinkedin /> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/LucianoOroquietam" target="_blank" rel="noopener noreferrer">
                                    <FiGithub /> GitHub
                                </a>
                            </li>
                            <li>
                                <a href="/CV_Luciano_Oroquieta.pdf" download="CV_Luciano_Oroquieta.pdf">
                                    <FiDownload /> {translate('heroCtaSecondary')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default CTASection;
