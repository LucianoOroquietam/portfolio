// ═══════════════════════════════════════════════════════════════════════════
// PROCESO — título fijo a la izquierda; cada paso se enciende al pasar por el centro
// ═══════════════════════════════════════════════════════════════════════════

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import Reveal from '../ui/Reveal';
import './ThinkingSection.css';

const STEPS = [1, 2, 3];

// Un paso se considera activo cuando su centro cruza la franja central de la pantalla
const ProcessStep = ({ n, translate, delay }) => {
    const ref = useRef(null);
    const active = useInView(ref, { margin: '-45% 0px -45% 0px' });

    return (
        <Reveal
            as="li"
            className={`process__step ${active ? 'is-active' : ''}`}
            delay={delay}
            y={16}
            ref={ref}
        >
            <span className="process__number" aria-hidden="true">{translate(`thinkingStep${n}Number`)}</span>
            <h3 className="process__title">{translate(`thinkingStep${n}Title`)}</h3>
            <p className="process__desc">{translate(`thinkingStep${n}Desc`)}</p>
        </Reveal>
    );
};

const ThinkingSection = () => {
    const { translate } = useLanguage();

    return (
        <section className="process section" id="thinking" aria-labelledby="process-title">
            <div className="container process__wrapper">
                <header className="process__intro">
                    <Reveal as="h2" className="process__headline" id="process-title">
                        {translate('thinkingHeadline')}
                    </Reveal>
                    <Reveal as="p" className="process__sub" delay={0.08}>
                        {translate('thinkingSubheadline')}
                    </Reveal>
                </header>

                <ol className="process__steps">
                    {STEPS.map((n, i) => (
                        <ProcessStep key={n} n={n} translate={translate} delay={i * 0.06} />
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default ThinkingSection;
