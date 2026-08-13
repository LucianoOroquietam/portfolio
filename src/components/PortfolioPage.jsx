// ═══════════════════════════════════════════════════════════════════════════
// PORTFOLIO PAGE — Full Projects Gallery 2026
// ═══════════════════════════════════════════════════════════════════════════

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { works } from '../data/works';
import { FiExternalLink, FiGithub, FiGrid, FiList } from 'react-icons/fi';
import { 
    SiReact, SiAngular, SiNodedotjs, SiSpringboot, 
    SiJavascript, SiTypescript, SiPhp, SiHtml5 
} from 'react-icons/si';
import n8nIcon from '../assets/icons/n8n.svg';
import nextjsIcon from '../assets/icons/nextjs.svg';
import './PortfolioPage.css';

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

const PortfolioPage = () => {
    const { translate, language } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('all');
    const [viewMode, setViewMode] = useState('grid');

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }, []);

    // Extract unique technologies for filters
    const allTechs = [...new Set(works.flatMap(work => work.tecnologias || []))];
    const mainFilters = ['React', 'Angular', 'Spring', 'NodeJs', 'JavaScript', 'Python', 'n8n'];

    const filteredWorks = activeFilter === 'all'
        ? works
        : works.filter(work => (work.tecnologias || []).includes(activeFilter));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.3 }
        }
    };

    return (
        <main className="portfolio-page">
            <div className="container">
                <motion.div 
                    className="portfolio-page__wrapper"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="portfolio-page__header">
                        <span className="portfolio-page__label">{translate('projectsSectionLabel')}</span>
                        <h1 className="portfolio-page__headline">{translate('projectsHeadline')}</h1>
                        <p className="portfolio-page__subheadline">{translate('projectsSubheadline')}</p>
                    </motion.div>

                    {/* Filters & View Toggle */}
                    <motion.div variants={itemVariants} className="portfolio-page__controls">
                        <div className="portfolio-page__filters">
                            <button
                                className={`filter-btn ${activeFilter === 'all' ? 'filter-btn--active' : ''}`}
                                onClick={() => setActiveFilter('all')}
                            >
                                {language === 'es' ? 'Todos' : 'All'}
                            </button>
                            {mainFilters.map(filter => (
                                <button
                                    key={filter}
                                    className={`filter-btn ${activeFilter === filter ? 'filter-btn--active' : ''}`}
                                    onClick={() => setActiveFilter(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        <div className="portfolio-page__view-toggle">
                            <button 
                                className={`view-btn ${viewMode === 'grid' ? 'view-btn--active' : ''}`}
                                onClick={() => setViewMode('grid')}
                                aria-label="Grid view"
                            >
                                <FiGrid />
                            </button>
                            <button 
                                className={`view-btn ${viewMode === 'list' ? 'view-btn--active' : ''}`}
                                onClick={() => setViewMode('list')}
                                aria-label="List view"
                            >
                                <FiList />
                            </button>
                        </div>
                    </motion.div>

                    {/* Projects Count */}
                    <motion.p variants={itemVariants} className="portfolio-page__count">
                        {filteredWorks.length} {filteredWorks.length === 1 
                            ? (language === 'es' ? 'proyecto' : 'project')
                            : (language === 'es' ? 'proyectos' : 'projects')
                        }
                    </motion.p>

                    {/* Projects Grid/List */}
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeFilter + viewMode}
                            className={`portfolio-page__grid ${viewMode === 'list' ? 'portfolio-page__grid--list' : ''}`}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                                                        {filteredWorks.map((work, index) => {
                                const techs = work.tecnologias || [];
                                const TechIcon = techs[0] ? techLogos[techs[0]] : null;
                                
                                return (
                                    <motion.article
                                        key={work.id}
                                        className={`project-card ${viewMode === 'list' ? 'project-card--list' : ''}`}
                                        variants={itemVariants}
                                        layout
                                    >
                                        <div className="project-card__image-wrapper">
                                            {work.imagen ? (
                                                <img 
                                                    src={work.imagen} 
                                                    alt={work.nombre}
                                                    className="project-card__image"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        // Si la imagen falla, mostrar el placeholder con logo
                                                        e.target.style.display = 'none';
                                                        e.target.parentElement.querySelector('.project-card__placeholder').style.display = 'flex';
                                                    }}
                                                />
                                            ) : null}
                                            <div className="project-card__placeholder" style={work.imagen ? {display: 'none'} : {}}>
                                                {TechIcon ? (
                                                    <TechIcon className="project-card__tech-icon" />
                                                ) : (
                                                    <span>{work.nombre?.charAt(0) || 'P'}</span>
                                                )}
                                            </div>
                                            <div className="project-card__overlay">
                                                <div className="project-card__actions">
                                                    {work.url && (
                                                        <a 
                                                            href={work.url} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="project-card__action"
                                                            aria-label="Ver demo"
                                                        >
                                                            <FiExternalLink />
                                                        </a>
                                                    )}
                                                    {work.urlRepo && (
                                                        <a 
                                                            href={work.urlRepo} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="project-card__action"
                                                            aria-label="Ver código"
                                                        >
                                                            <FiGithub />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project-card__content">
                                            <div className="project-card__tech">
                                                {techs.slice(0, 3).map(tech => (
                                                    <span key={tech} className="tech-badge">{tech}</span>
                                                ))}
                                                {techs.length > 3 && (
                                                    <span className="tech-badge tech-badge--more">
                                                        +{techs.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="project-card__title">
                                                {work.nombre}
                                            </h3>
                                            <p className="project-card__description">
                                                {work.descripcion}
                                            </p>
                                            {viewMode === 'list' && (
                                                <div className="project-card__meta">
                                                    <span className="project-card__category">
                                                        {(work.categorias && work.categorias[0]) || (language === 'es' ? 'Proyecto Web' : 'Web Project')}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>

                    {/* Empty State */}
                    {filteredWorks.length === 0 && (
                        <motion.div 
                            className="portfolio-page__empty"
                            variants={itemVariants}
                        >
                            <p>
                                {language === 'es' 
                                    ? 'No hay proyectos con esta tecnología.' 
                                    : 'No projects with this technology.'}
                            </p>
                            <button 
                                className="btn btn-secondary"
                                onClick={() => setActiveFilter('all')}
                            >
                                {language === 'es' ? 'Ver todos' : 'View all'}
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </main>
    );
};

export default PortfolioPage;
