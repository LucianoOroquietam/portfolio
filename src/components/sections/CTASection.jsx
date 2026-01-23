// ═══════════════════════════════════════════════════════════════════════════
// CTA SECTION — Call to Action Premium Component
// ═══════════════════════════════════════════════════════════════════════════

import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import './CTASection.css';

const CTASection = () => {
    const { translate } = useLanguage();

    return (
        <section className="cta-section">
            <div className="container">
                <motion.div 
                    className="cta-section__wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    {/* Background Elements */}
                    <div className="cta-section__bg">
                        <div className="cta-section__gradient" />
                        <div className="cta-section__pattern" />
                    </div>

                    {/* Content */}
                    <div className="cta-section__content">
                        <motion.h2 
                            className="cta-section__headline"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            {translate('contactHeadline')}
                        </motion.h2>
                        <motion.p 
                            className="cta-section__subheadline"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            {translate('contactSubheadline')}
                        </motion.p>
                        <motion.div 
                            className="cta-section__actions"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                <FiMail />
                                {translate('heroCtaTertiary')}
                                <FiArrowRight />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
