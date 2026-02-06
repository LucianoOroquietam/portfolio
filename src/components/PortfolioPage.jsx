// ═══════════════════════════════════════════════════════════════════════════
// PORTFOLIO PAGE — Full Projects Gallery 2026
// ═══════════════════════════════════════════════════════════════════════════

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { works } from '../data/works';
import { FiExternalLink, FiGithub, FiFilter, FiGrid, FiList } from 'react-icons/fi';
import { 
    SiReact, SiAngular, SiNodedotjs, SiSpringboot, 
    SiJavascript, SiTypescript, SiPhp, SiHtml5, SiPython 
} from 'react-icons/si';
import './PortfolioPage.css';

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
    const mainFilters = ['React', 'Angular', 'Spring', 'NodeJs', 'JavaScript'];

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
