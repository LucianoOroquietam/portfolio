// ═══════════════════════════════════════════════════════════════════════════
// ABOUT SECTION — Premium Storytelling Component
// ═══════════════════════════════════════════════════════════════════════════

import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
    const { translate } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    const highlights = [
        { title: translate('aboutHighlight1Title'), label: translate('aboutHighlight1Label') },
        { title: translate('aboutHighlight2Title'), label: translate('aboutHighlight2Label') },
        { title: translate('aboutHighlight3Title'), label: translate('aboutHighlight3Label') },
    ];

    return (
        <section className="about section" id="about" ref={ref}>
            <div className="container">
                <motion.div 
                    className="about__wrapper"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Image Side */}
                    <motion.div variants={itemVariants} className="about__image-container">
                        <div className="about__image-wrapper">
                            <img 
                                src="/images/Luciano.webp" 
                                alt="Luciano Oroquieta" 
                                className="about__image"
                            />
                            <div className="about__image-border" />
                            <div className="about__image-glow" />
                        </div>
                        
                        {/* Floating Elements */}
                        <motion.div 
                            className="about__floating-badge about__floating-badge--1"
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <span className="about__floating-icon">🎓</span>
                            <span>UNICEN</span>
                        </motion.div>
                        <motion.div 
                            className="about__floating-badge about__floating-badge--2"
                            animate={{ y: [5, -5, 5] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        >
                            <span className="about__floating-icon">💼</span>
                            <span>Freelance</span>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="about__content">
                        <motion.span variants={itemVariants} className="about__label">
                            {translate('aboutSectionLabel')}
                        </motion.span>
                        
                        <motion.h2 variants={itemVariants} className="about__headline">
                            {translate('aboutHeadline')}
                        </motion.h2>
                        
                        <motion.p variants={itemVariants} className="about__description">
                            {translate('aboutDescription1')}
                        </motion.p>
                        
                        <motion.p variants={itemVariants} className="about__description">
                            {translate('aboutDescription2')}
                        </motion.p>

                        {/* Highlights */}
                        <motion.div variants={itemVariants} className="about__highlights">
                            {highlights.map((item, index) => (
                                <div key={index} className="about__highlight">
                                    <span className="about__highlight-number">{item.title}</span>
                                    <span className="about__highlight-label">{item.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
