// ═══════════════════════════════════════════════════════════════════════════
// STACK — organizado por capacidad, en filas de texto (sin logos ni niveles)
// Cada fila se revela al entrar; al scrollear, el título y las tecnologías se
// desplazan en sentido contrario, y las tecnologías aparecen en cascada.
// ═══════════════════════════════════════════════════════════════════════════

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { stack } from '../../data/skills';
import { EASE } from '../../lib/motion';
import SectionHeader from '../ui/SectionHeader';
import './SkillsSection.css';

const DOMAIN_KEYS = {
    ai: ['skillsDomainAI', 'skillsDomainAIDesc'],
    backend: ['skillsDomainBackend', 'skillsDomainBackendDesc'],
    frontend: ['skillsDomainFrontend', 'skillsDomainFrontendDesc'],
    data: ['skillsDomainDatabase', 'skillsDomainDatabaseDesc'],
    infra: ['skillsDomainInfra', 'skillsDomainInfraDesc'],
};

const StackRow = ({ group, index, translate }) => {
    const ref = useRef(null);
    const reduceMotion = useReducedMotion();
    const [titleKey, descKey] = DOMAIN_KEYS[group.id];

    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    // el encabezado sube y la lista baja: se separan a medida que la fila cruza la pantalla
    const headY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [24, -24]);
    const listY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-12, 12]);

    return (
        <motion.section
            ref={ref}
            className={`stack-row ${group.featured ? 'stack-row--featured' : ''}`}
            aria-labelledby={`stack-${group.id}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            transition={{ duration: 0.6, ease: EASE, delay: Math.min(index, 3) * 0.05 }}
        >
            <motion.header className="stack-row__head" style={{ y: headY }}>
                <h3 className="stack-row__title" id={`stack-${group.id}`}>{translate(titleKey)}</h3>
                <p className="stack-row__desc">{translate(descKey)}</p>
            </motion.header>

            <motion.ul className="stack-row__items" style={{ y: listY }}>
                {group.items.map((item, j) => (
                    <motion.li
                        key={item.name}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '0px 0px -40px 0px' }}
                        transition={{ duration: 0.45, ease: EASE, delay: 0.1 + j * 0.03 }}
                    >
                        {item.name}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.section>
    );
};

const SkillsSection = () => {
    const { translate } = useLanguage();

    return (
        <section className="stack section" id="skills" aria-labelledby="stack-title">
            <div className="container">
                <SectionHeader
                    id="stack-title"
                    title={translate('skillsHeadline')}
                    subtitle={translate('skillsSubheadline')}
                />

                <div className="stack__rows">
                    {stack.map((group, i) => (
                        <StackRow key={group.id} group={group} index={i} translate={translate} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
