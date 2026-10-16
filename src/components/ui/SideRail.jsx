// ═══════════════════════════════════════════════════════════════════════════
// SIDE RAIL — barra vertical de navegación entre secciones (solo desktop, home).
// El ícono de la sección visible se enciende mientras se scrollea.
// ═══════════════════════════════════════════════════════════════════════════

import { useEffect, useState } from 'react';
import { FiFolder, FiHome, FiLayers, FiMail, FiTarget, FiUser } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import './SideRail.css';

// id de la sección en el DOM, ícono y clave de traducción para la etiqueta
const ITEMS = [
    { id: 'inicio', icon: FiHome, labelKey: 'navHome' },
    { id: 'about', icon: FiUser, labelKey: 'aboutSectionLabel' },
    { id: 'thinking', icon: FiTarget, labelKey: 'thinkingSectionLabel' },
    { id: 'projects', icon: FiFolder, labelKey: 'navProjects' },
    { id: 'skills', icon: FiLayers, labelKey: 'skillsSectionLabel' },
    { id: 'contact', icon: FiMail, labelKey: 'navContact' },
];

// La sección activa es la última cuya parte superior ya pasó la franja del 40% de la pantalla
const findActive = () => {
    const probe = window.innerHeight * 0.4;
    let current = ITEMS[0].id;
    for (const item of ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= probe) current = item.id;
    }
    return current;
};

// La barra se oculta cuando el footer llega a su zona: no debe cruzar el cierre de la página
const footerIsNear = () => {
    const footer = document.querySelector('.footer');
    if (!footer) return false;
    return footer.getBoundingClientRect().top < window.innerHeight / 2 + 180;
};

const SideRail = () => {
    const { translate } = useLanguage();
    const [active, setActive] = useState(ITEMS[0].id);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let frame = null;
        const update = () => {
            frame = null;
            setActive(findActive());
            setHidden(footerIsNear());
        };
        const onScroll = () => {
            if (frame === null) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frame !== null) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <nav className={`side-rail ${hidden ? 'is-hidden' : ''}`} aria-label={translate('navHome')}>
            <ul className="side-rail__list">
                {ITEMS.map(({ id, icon: Icon, labelKey }) => {
                    const label = translate(labelKey);
                    return (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={`side-rail__link ${active === id ? 'is-active' : ''}`}
                                aria-label={label}
                                aria-current={active === id ? 'true' : undefined}
                            >
                                <Icon aria-hidden="true" />
                                <span className="side-rail__label" aria-hidden="true">{label}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default SideRail;
