// ═══════════════════════════════════════════════════════════════════════════
// FEATURED PROJECTS SECTION — Premium Project Cards with Storytelling
// ═══════════════════════════════════════════════════════════════════════════

import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { works } from '../../data/works';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import { 
    SiReact, SiAngular, SiNodedotjs, SiSpringboot, 
    SiJavascript, SiTypescript, SiPhp, SiHtml5, SiPython 
} from 'react-icons/si';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

// Mapeo de tecnologías a logos
const techLogos = {
    'React': SiReact,
    'Angular': SiAngular,
    'NodeJs': SiNodedotjs,
    'Node.js': SiNodedotjs,
    'Spring': SiSpringboot,
    'JavaScript': SiJavascript,
    'TypeScript': SiTypescript,
    'PHP': SiPhp,
    'Html': SiHtml5,
    'Python': SiPython,
};

const FeaturedProjects = () => {
    const { translate } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredProject, setHoveredProject] = useState(null);

    // Get featured projects (first 4)
    const featuredProjects = works.slice(0, 4);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    return (
        <section className="featured-projects section" id="projects" ref={ref}>
            <div className="container">
                {/* Section Header */}
                <motion.div 
                    className="featured-projects__header"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.span variants={itemVariants} className="featured-projects__label">
                        {translate('projectsSectionLabel')}
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="featured-projects__headline">
                        {translate('projectsHeadline')}
                    </motion.h2>
                    <motion.p variants={itemVariants} className="featured-projects__subheadline">
                        {translate('projectsSubheadline')}
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div 
                    className="featured-projects__grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {featuredProjects.map((project, index) => {
                        const TechIcon = project.tecnologias?.[0] ? techLogos[project.tecnologias[0]] : SiHtml5;
                        
                        return (
                            <motion.article 
                                key={project.id}
                                variants={itemVariants}
                                className={`project-card ${index === 0 ? 'project-card--featured' : ''}`}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                {/* Project Image */}
                                <div className="project-card__image-wrapper">
                                    {project.imagen ? (
                                        <>
                                            <img 
                                                src={project.imagen} 
                                                alt={project.nombre}
                                                className="project-card__image"
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.querySelector('.project-card__placeholder').style.display = 'flex';
                                                }}
                                            />
                                            <div className="project-card__placeholder" style={{display: 'none'}}>
                                                <TechIcon className="project-card__tech-icon-large" />
                                            </div>
                                        </>
                                    ) : (
                                        <div className="project-card__placeholder">
                                            <TechIcon className="project-card__tech-icon-large" />
                                        </div>
                                    )}
                                    <div className="project-card__image-overlay" />
                                    
                                    {/* Tech Badge */}
                                    <div className="project-card__tech-badge">
                                        <TechIcon />
                                    </div>
                                </div>

                            {/* Project Content */}
                            <div className="project-card__content">
                                <div className="project-card__header">
                                    <span className="project-card__tagline">
                                        {translate(`${project.nombre}_tagline`)}
                                    </span>
                                    <h3 className="project-card__title">
                                        {translate(`${project.nombre}_name`)}
                                    </h3>
                                </div>

                                <p className="project-card__description">
                                    {translate(`${project.nombre}_description`)}
                                </p>

                                {/* Technologies */}
                                <div className="project-card__technologies">
                                    {project.tecnologias?.map((tech, i) => (
                                        <span key={i} className="project-card__tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="project-card__actions">
                                    {project.url && (
                                        <a 
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary btn-sm"
                                        >
                                            <FiExternalLink />
                                            {translate('projectsViewLive')}
                                        </a>
                                    )}
                                    {project.urlRepo && (
                                        <a 
                                            href={project.urlRepo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-secondary btn-sm"
                                        >
                                            <FiGithub />
                                            {translate('projectsViewRepo')}
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <motion.div 
                                className="project-card__glow"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredProject === project.id ? 0.5 : 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.article>
                        );
                    })}
                </motion.div>

                {/* View All Link */}
                <motion.div 
                    className="featured-projects__view-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Link to="/portfolio" className="featured-projects__link">
                        {translate('projectsViewAll')}
                        <FiArrowRight />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
