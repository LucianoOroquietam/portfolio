// ═══════════════════════════════════════════════════════════════════════════
// CURRICULUM PAGE — Premium Experience Timeline 2026
// ═══════════════════════════════════════════════════════════════════════════

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FiBriefcase, FiBook, FiAward, FiDownload, FiMapPin, FiCalendar } from 'react-icons/fi';
import './CurriculumPage.css';

const CurriculumPage = () => {
    const { translate } = useLanguage();

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }, []);

    const experiences = [
        {
            role: translate('expRole5'),
            company: translate('expCompany5'),
            period: translate('expPeriod5'),
            location: translate('expLocation5'),
            descriptions: [
                translate('expDesc5_1'),
                translate('expDesc5_2'),
                translate('expDesc5_3'),
            ],
            current: true
        },
        {
            role: translate('expRole4'),
            company: translate('expCompany4'),
            period: translate('expPeriod4'),
            location: translate('expLocation4'),
            descriptions: [
                translate('expDesc4_1'),
                translate('expDesc4_2'),
                translate('expDesc4_3'),
            ],
            current: false
        },
        {
            role: translate('expRole3'),
            company: translate('expCompany3'),
            period: translate('expPeriod3'),
            location: translate('expLocation3'),
            descriptions: [
                translate('expDesc3_1'),
                translate('expDesc3_2'),
                translate('expDesc3_3'),
            ],
            current: false
        },
        {
            role: translate('expRole2'),
            company: translate('expCompany2'),
            period: translate('expPeriod2'),
            location: translate('expLocation2'),
            descriptions: [
                translate('expDesc2_1'),
                translate('expDesc2_2'),
                translate('expDesc2_3'),
            ],
            current: true
        },
        {
            role: translate('expRole1'),
            company: translate('expCompany1'),
            period: translate('expPeriod1'),
            location: translate('expLocation1'),
            descriptions: [
                translate('expDesc1_1'),
                translate('expDesc1_2'),
                translate('expDesc1_3'),
            ],
            current: true
        },
    ];

    const education = [
        {
            degree: translate('eduDegree1'),
            institution: translate('eduInstitution1'),
            period: translate('eduPeriod1'),
        }
    ];

    const certifications = [
        translate('cert1'),
        translate('cert2'),
        translate('cert3'),
        translate('cert4'),
        translate('cert5'),
        translate('cert6'),
        translate('cert7'),
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    return (
        <main className="curriculum-page">
            <div className="container">
                <motion.div 
                    className="curriculum-page__wrapper"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="curriculum-page__header">
                        <span className="curriculum-page__label">{translate('experienceSectionLabel')}</span>
                        <h1 className="curriculum-page__headline">{translate('experienceHeadline')}</h1>
                        <p className="curriculum-page__subheadline">{translate('experienceSubheadline')}</p>
                        
                        <a 
                            href="/CV_Luciano_Oroquieta.pdf" 
                            download="CV_Luciano_Oroquieta.pdf" 
                            className="btn btn-primary btn-lg curriculum-page__download"
                        >
                            <FiDownload />
                            {translate('heroCtaSecondary')}
                        </a>
                    </motion.div>

                    {/* Main Content */}
                    <div className="curriculum-page__content">
                        {/* Experience Section */}
                        <motion.section variants={itemVariants} className="curriculum-section">
                            <div className="curriculum-section__header">
                                <div className="curriculum-section__icon">
                                    <FiBriefcase />
                                </div>
                                <h2 className="curriculum-section__title">{translate('experienceHeadline')}</h2>
                            </div>

                            <div className="timeline">
                                {experiences.map((exp, index) => (
                                    <motion.div 
                                        key={index}
                                        className="timeline__item"
                                        variants={itemVariants}
                                    >
                                        <div className="timeline__marker">
                                            <div className={`timeline__dot ${exp.current ? 'timeline__dot--current' : ''}`} />
                                            {index < experiences.length - 1 && <div className="timeline__line" />}
                                        </div>
                                        <div className="timeline__content">
                                            <div className="timeline__header">
                                                <h3 className="timeline__role">{exp.role}</h3>
                                                <span className="timeline__company">{exp.company}</span>
                                            </div>
                                            <div className="timeline__meta">
                                                <span className="timeline__period">
                                                    <FiCalendar />
                                                    {exp.period}
                                                </span>
                                                <span className="timeline__location">
                                                    <FiMapPin />
                                                    {exp.location}
                                                </span>
                                            </div>
                                            <ul className="timeline__descriptions">
                                                {exp.descriptions.map((desc, i) => (
                                                    <li key={i}>{desc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Sidebar */}
                        <div className="curriculum-page__sidebar">
                            {/* Education */}
                            <motion.section variants={itemVariants} className="curriculum-card">
                                <div className="curriculum-card__header">
                                    <div className="curriculum-card__icon">
                                        <FiBook />
                                    </div>
                                    <h2 className="curriculum-card__title">{translate('educationHeadline')}</h2>
                                </div>
                                <div className="curriculum-card__content">
                                    {education.map((edu, index) => (
                                        <div key={index} className="education-item">
                                            <h3 className="education-item__degree">{edu.degree}</h3>
                                            <span className="education-item__institution">{edu.institution}</span>
                                            <span className="education-item__period">{edu.period}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>

                            {/* Certifications */}
                            <motion.section variants={itemVariants} className="curriculum-card">
                                <div className="curriculum-card__header">
                                    <div className="curriculum-card__icon">
                                        <FiAward />
                                    </div>
                                    <h2 className="curriculum-card__title">{translate('certificationsHeadline')}</h2>
                                </div>
                                <div className="curriculum-card__content">
                                    <ul className="certifications-list">
                                        {certifications.map((cert, index) => (
                                            <li key={index} className="certification-item">
                                                <span className="certification-item__dot" />
                                                {cert}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.section>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default CurriculumPage;
