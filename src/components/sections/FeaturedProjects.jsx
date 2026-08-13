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
    SiJavascript, SiTypescript, SiPhp, SiHtml5 
} from 'react-icons/si';
import n8nIcon from '../../assets/icons/n8n.svg';
import nextjsIcon from '../../assets/icons/nextjs.svg';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

const CustomPythonIcon = (props) => (
    <svg 
        {...props}
        viewBox="0 0 256 256" 
        height="1em" 
        width="1em" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <g transform="scale(5.33333,5.33333)">
            <path d="M24.047,5c-1.555,0.005 -2.633,0.142 -3.936,0.367c-3.848,0.67 -4.549,2.077 -4.549,4.67v3.963h9v2h-9.342h-4.35c-2.636,0 -4.943,1.242 -5.674,4.219c-0.826,3.417 -0.863,5.557 0,9.125c0.655,2.661 2.098,4.656 4.735,4.656h3.632v-5.104c0,-2.966 2.686,-5.896 5.764,-5.896h7.236c2.523,0 5,-1.862 5,-4.377v-8.586c0,-2.439 -1.759,-4.263 -4.218,-4.672c0.061,-0.006 -1.756,-0.371 -3.298,-0.365zM19.063,9c0.821,0 1.5,0.677 1.5,1.502c0,0.833 -0.679,1.498 -1.5,1.498c-0.837,0 -1.5,-0.664 -1.5,-1.498c0,-0.822 0.663,-1.502 1.5,-1.502z" fill="var(--color-accent-primary)" />
            <path d="M23.078,43c1.555,-0.005 2.633,-0.142 3.936,-0.367c3.848,-0.67 4.549,-2.077 4.549,-4.67v-3.963h-9v-2h9.343h4.35c2.636,0 4.943,-1.242 5.674,-4.219c0.826,-3.417 0.863,-5.557 0,-9.125c-0.656,-2.661 -2.099,-4.656 -4.736,-4.656h-3.632v5.104c0,2.966 -2.686,5.896 -5.764,5.896h-7.236c-2.523,0 -5,1.862 -5,4.377v8.586c0,2.439 1.759,4.263 4.218,4.672c-0.061,0.006 1.756,0.371 3.298,0.365zM28.063,39c-0.821,0 -1.5,-0.677 -1.5,-1.502c0,-0.833 0.679,-1.498 1.5,-1.498c0.837,0 1.5,0.664 1.5,1.498c0,0.822 -0.664,1.502 -1.5,1.502z" fill="var(--color-accent-primary)" />
        </g>
    </svg>
);

const N8nIcon = ({ className, style }) => (
    <img src={n8nIcon} alt="n8n" className={className} style={{ height: '60px', width: 'auto', maxWidth: '70%', ...style }} />
);

const NextjsIcon = ({ className, style }) => (
    <img src={nextjsIcon} alt="Next.js" className={className} style={{ ...style }} />
);

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
    'Python': CustomPythonIcon,
    'n8n': N8nIcon,
    'Next.js': NextjsIcon,
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
                        const TechIcon = (project.tecnologias?.[0] && techLogos[project.tecnologias[0]]) ? techLogos[project.tecnologias[0]] : SiHtml5;
                        
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
