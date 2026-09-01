// ═══════════════════════════════════════════════════════════════════════════
// HERO SECTION — High Impact Landing Component
// Premium 2026 Design with Glassmorphism & Animations
// ═══════════════════════════════════════════════════════════════════════════

import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiDownload, FiMail, FiChevronDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
    const { translate } = useLanguage();

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    const floatVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="hero">
            {/* Background Elements */}
            <div className="hero__bg">
                <div className="hero__gradient-orb hero__gradient-orb--1" />
                <div className="hero__gradient-orb hero__gradient-orb--2" />
                <div className="hero__grid-overlay" />
            </div>

            <div className="hero__container container">
                <motion.div
                    className="hero__content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    {/* Tagline */}
                    <motion.p variants={itemVariants} className="hero__tagline">
                        {translate('heroTagline')}
                    </motion.p>

                    {/* Main Headline */}
                    <motion.h1 variants={itemVariants} className="hero__headline">
                        {translate('heroHeadline')}
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p variants={itemVariants} className="hero__subheadline">
                        {translate('heroSubheadline')}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={itemVariants} className="hero__cta-group">
                        <a href="#projects" className="btn btn-primary btn-lg hero__cta-primary">
                            {translate('heroCtaPrimary')}
                            <FiArrowRight className="hero__cta-icon" />
                        </a>
                        <a
                            href="/CV_Luciano_Oroquieta.pdf"
                            download="CV_Luciano_Oroquieta.pdf"
                            className="btn btn-secondary btn-lg hero__cta-secondary"
                        >
                            <FiDownload className="hero__cta-icon" />
                            {translate('heroCtaSecondary')}
                        </a>
                        <Link to="/contact" className="btn btn-ghost btn-lg hero__cta-tertiary">
                            <FiMail className="hero__cta-icon" />
                            {translate('heroCtaTertiary')}
                        </Link>
                    </motion.div>

                    {/* Focus Areas */}
                    <motion.div variants={itemVariants} className="hero__tech-stack">
                        <div className="hero__tech-items">
                            {[
                                translate('heroFocus1'),
                                translate('heroFocus2'),
                                translate('heroFocus3'),
                            ].map((label, index) => (
                                <motion.span
                                    key={label}
                                    className="hero__tech-item"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                >
                                    {label}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Decorative Visual */}
                <motion.div
                    className="hero__visual"
                    variants={floatVariants}
                    animate="animate"
                >
                    <div className="hero__visual-card hero__visual-card--1">
                        <div className="hero__visual-code">
                            <span className="code-keyword">const</span>
                            <span className="code-variable"> {translate('heroSnippetVar')}</span>
                            <span className="code-operator"> = </span>
                            <span className="code-bracket">{'{'}</span>
                            <br />
                            <span className="code-property">  {translate('heroSnippetProp1')}</span>
                            <span className="code-operator">:</span>
                            <span className="code-string"> {translate('heroSnippetVal1')}</span>
                            <span className="code-comma">,</span>
                            <br />
                            <span className="code-property">  {translate('heroSnippetProp2')}</span>
                            <span className="code-operator">:</span>
                            <span className="code-string"> {translate('heroSnippetVal2')}</span>
                            <span className="code-comma">,</span>
                            <br />
                            <span className="code-property">  {translate('heroSnippetProp3')}</span>
                            <span className="code-operator">:</span>
                            <span className="code-string"> {translate('heroSnippetVal3')}</span>
                            <span className="code-comma">,</span>
                            <br />
                            <span className="code-property">  {translate('heroSnippetProp4')}</span>
                            <span className="code-operator">:</span>
                            <span className="code-string"> true</span>
                            <br />
                            <span className="code-bracket">{'}'}</span>
                            <span className="code-semicolon">;</span>
                        </div>
                    </div>
                    <div className="hero__visual-card hero__visual-card--2">
                        <div className="hero__visual-stats">
                            <div className="hero__stat">
                                <span className="hero__stat-number">3+</span>
                                <span className="hero__stat-label">Years</span>
                            </div>
                            <div className="hero__stat">
                                <span className="hero__stat-number">10+</span>
                                <span className="hero__stat-label">Projects</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="hero__scroll-indicator"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
            >
                <span>{translate('heroScrollIndicator')}</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <FiChevronDown />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
