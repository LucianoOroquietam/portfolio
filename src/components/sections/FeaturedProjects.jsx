// ═══════════════════════════════════════════════════════════════════════════
// PROYECTOS — casos destacados con tres composiciones distintas + grilla compacta
//   1. Caso principal: imagen a todo el ancho, texto debajo en columnas
//   2. Par: dos casos lado a lado
//   3. Caso dividido: diagrama del sistema + texto (proyecto sin captura propia)
// Datos: works.js (proyecto) + translations.js (problema / solución / tagline)
// ═══════════════════════════════════════════════════════════════════════════

import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiGithub, FiPlay } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import { works } from '../../data/works';
import Reveal from '../ui/Reveal';
import RevealImage from '../ui/RevealImage';
import ParallaxImage from '../ui/ParallaxImage';
import SectionHeader from '../ui/SectionHeader';
import SystemFlow from '../ui/SystemFlow';
import './FeaturedProjects.css';

const FEATURED_COUNT = 4;

const isVideo = (url) => /loom\.com|youtu/i.test(url);

// Enlaces reales del proyecto; si no hay ninguno se indica sin inventar demo.
const projectLinks = (project, translate) => {
    const links = [];
    if (project.url) {
        links.push({
            href: project.url,
            label: translate(isVideo(project.url) ? 'projectsDemoVideo' : 'projectsViewLive'),
            icon: isVideo(project.url) ? <FiPlay /> : <FiArrowUpRight />,
            primary: true,
        });
    }
    if (project.urlRepo) {
        links.push({ href: project.urlRepo, label: translate('projectsViewRepo'), icon: <FiGithub /> });
    }
    return links;
};

const ProjectLinks = ({ project, translate }) => {
    const links = projectLinks(project, translate);
    if (!links.length) return <span className="case__nodemo">{translate('projectsNoLinks')}</span>;

    return (
        <div className="case__links">
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-sm ${link.primary ? 'btn-primary' : 'btn-secondary'}`}
                >
                    {link.icon}
                    {link.label}
                </a>
            ))}
        </div>
    );
};

const TechList = ({ items, label }) => (
    <ul className="techlist" aria-label={label}>
        {items?.map((tech) => <li key={tech}>{tech}</li>)}
    </ul>
);

const Visual = ({ project, name, translate, ratio }) => {
    const [width, height] = project.dimensiones || [1280, 800];

    if (!project.imagen) {
        return (
            <div className="case__diagram">
                <SystemFlow steps={project.flujo || []} size="lg" label={translate('projectsArchitecture')} />
            </div>
        );
    }

    return (
        <RevealImage className="case__frame">
            <ParallaxImage
                className="case__image"
                src={project.imagen}
                alt={`${name}: ${translate(`${project.nombre}_tagline`)}`}
                width={width}
                height={height}
                loading={ratio === 'eager' ? 'eager' : 'lazy'}
            />
        </RevealImage>
    );
};

const Story = ({ project, translate }) => (
    <dl className="case__story">
        <div>
            <dt>{translate('projectsProblem')}</dt>
            <dd>{translate(`${project.nombre}_context`)}</dd>
        </div>
        <div>
            <dt>{translate('projectsBuilt')}</dt>
            <dd>{translate(`${project.nombre}_solution`)}</dd>
        </div>
    </dl>
);

// Etapas del sistema en una línea (solo si el proyecto tiene captura: si no, el diagrama es el visual)
const Architecture = ({ project, translate }) => {
    if (!project.flujo || !project.imagen) return null;
    return <SystemFlow steps={project.flujo} label={translate('projectsArchitecture')} />;
};

const CaseHead = ({ project, name, translate }) => (
    <header className="case__head">
        <p className="case__tagline">{translate(`${project.nombre}_tagline`)}</p>
        <h3 className="case__title">{name}</h3>
    </header>
);

// Variante 1 — caso principal
const LeadCase = ({ project, translate }) => {
    const name = translate(`${project.nombre}_name`);
    return (
        <Reveal as="article" className="case case--lead" id="case-lead" y={24}>
            <Visual project={project} name={name} translate={translate} ratio="eager" />
            <div className="case__body">
                <CaseHead project={project} name={name} translate={translate} />
                <Story project={project} translate={translate} />
                <div className="case__aside">
                    <Architecture project={project} translate={translate} />
                    <TechList items={project.tecnologias} label={translate('projectsTech')} />
                    <ProjectLinks project={project} translate={translate} />
                </div>
            </div>
        </Reveal>
    );
};

// Variante 2 — dos casos lado a lado
const HalfCase = ({ project, translate, delay }) => {
    const name = translate(`${project.nombre}_name`);
    return (
        <Reveal as="article" className="case case--half" id={`case-${project.id}`} delay={delay} y={24}>
            <Visual project={project} name={name} translate={translate} />
            <div className="case__body">
                <CaseHead project={project} name={name} translate={translate} />
                <Story project={project} translate={translate} />
                <Architecture project={project} translate={translate} />
                <TechList items={project.tecnologias} label={translate('projectsTech')} />
                <ProjectLinks project={project} translate={translate} />
            </div>
        </Reveal>
    );
};

// Variante 3 — diagrama + texto
const SplitCase = ({ project, translate }) => {
    const name = translate(`${project.nombre}_name`);
    return (
        <Reveal as="article" className="case case--split" y={24}>
            <Visual project={project} name={name} translate={translate} />
            <div className="case__body">
                <CaseHead project={project} name={name} translate={translate} />
                <Story project={project} translate={translate} />
                <TechList items={project.tecnologias} label={translate('projectsTech')} />
                <ProjectLinks project={project} translate={translate} />
            </div>
        </Reveal>
    );
};

// Trabajo secundario: miniatura sobria + datos esenciales
const MiniCase = ({ project, translate, index }) => {
    const name = translate(`${project.nombre}_name`);
    const links = projectLinks(project, translate);

    return (
        <Reveal as="article" className="mini" delay={(index % 3) * 0.06} y={16}>
            {project.imagen && (
                <div className="mini__thumb">
                    <img
                        src={project.imagen}
                        alt=""
                        width="640"
                        height="400"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            )}
            <div className="mini__body">
                <h4 className="mini__title">{name}</h4>
                <p className="mini__tagline">{translate(`${project.nombre}_tagline`)}</p>
                <TechList items={project.tecnologias?.slice(0, 3)} label={translate('projectsTech')} />
                {links.length > 0 && (
                    <p className="mini__links">
                        {links.map((link) => (
                            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                               aria-label={`${link.label}: ${name}`}>
                                {link.label}
                                {link.icon}
                            </a>
                        ))}
                    </p>
                )}
            </div>
        </Reveal>
    );
};

const FeaturedProjects = () => {
    const { translate } = useLanguage();
    const featured = works.slice(0, FEATURED_COUNT);
    const others = works.slice(FEATURED_COUNT);
    const [lead, ...rest] = featured;
    const pair = rest.filter((p) => p.imagen).slice(0, 2);
    const split = rest.filter((p) => !p.imagen);

    return (
        <section className="projects section" id="projects" aria-labelledby="projects-title">
            <div className="container">
                <SectionHeader
                    id="projects-title"
                    title={translate('projectsHeadline')}
                    subtitle={translate('projectsSubheadline')}
                />

                <div className="projects__cases">
                    <LeadCase project={lead} translate={translate} />

                    <div className="projects__pair">
                        {pair.map((project, i) => (
                            <HalfCase key={project.id} project={project} translate={translate} delay={i * 0.08} />
                        ))}
                    </div>

                    {split.map((project) => (
                        <SplitCase key={project.id} project={project} translate={translate} />
                    ))}
                </div>

                <div className="projects__more">
                    <Reveal as="h3" className="projects__more-title">{translate('projectsMore')}</Reveal>
                    <div className="projects__grid">
                        {others.map((project, i) => (
                            <MiniCase key={project.id} project={project} translate={translate} index={i} />
                        ))}
                    </div>

                    <Link to="/portfolio" className="projects__all">
                        {translate('projectsViewAll')}
                        <FiArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
