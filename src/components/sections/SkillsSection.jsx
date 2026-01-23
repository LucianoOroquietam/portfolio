// ═══════════════════════════════════════════════════════════════════════════
// SKILLS SECTION — Domain-Based Premium Layout
// ═══════════════════════════════════════════════════════════════════════════

import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../../data/skills';
import './SkillsSection.css';

// Icons for domains
import { FiMonitor, FiServer, FiDatabase, FiTool } from 'react-icons/fi';

const SkillsSection = () => {
    const { translate } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    const domains = [
        {
            id: 'frontend',
            icon: <FiMonitor />,
            title: translate('skillsDomainFrontend'),
            description: translate('skillsDomainFrontendDesc'),
            skills: skills.frontend,
            color: '#61dafb'
        },
        {
            id: 'backend',
            icon: <FiServer />,
            title: translate('skillsDomainBackend'),
            description: translate('skillsDomainBackendDesc'),
            skills: skills.backend,
            color: '#68a063'
        },
        {
            id: 'tools',
            icon: <FiTool />,
            title: translate('skillsDomainTools'),
            description: translate('skillsDomainToolsDesc'),
            skills: skills.herramientas,
            color: '#f97316'
        }
    ];

    return (
        <section className="skills-section section" id="skills" ref={ref}>
            <div className="container">
                {/* Section Header */}
                <motion.div 
                    className="skills-section__header"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.span variants={itemVariants} className="skills-section__label">
                        {translate('skillsSectionLabel')}
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="skills-section__headline">
                        {translate('skillsHeadline')}
                    </motion.h2>
                    <motion.p variants={itemVariants} className="skills-section__subheadline">
                        {translate('skillsSubheadline')}
                    </motion.p>
                </motion.div>

                {/* Skills Domains Grid */}
                <motion.div 
                    className="skills-section__domains"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {domains.map((domain, index) => (
                        <motion.div 
                            key={domain.id}
                            variants={itemVariants}
                            className="skills-domain"
                        >
                            {/* Domain Header */}
                            <div className="skills-domain__header">
                                <div 
                                    className="skills-domain__icon"
                                    style={{ '--domain-color': domain.color }}
                                >
                                    {domain.icon}
                                </div>
                                <div className="skills-domain__info">
                                    <h3 className="skills-domain__title">{domain.title}</h3>
                                    <p className="skills-domain__description">{domain.description}</p>
                                </div>
                            </div>

                            {/* Skills Grid */}
                            <div className="skills-domain__grid">
                                {domain.skills.map((skill, skillIndex) => (
                                    <motion.div 
                                        key={skill.name}
                                        className="skill-item"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ 
                                            delay: 0.3 + (index * 0.1) + (skillIndex * 0.05),
                                            duration: 0.3 
                                        }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        <div className="skill-item__icon">
                                            <img src={skill.icon} alt={skill.name} />
                                        </div>
                                        <span className="skill-item__name">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
