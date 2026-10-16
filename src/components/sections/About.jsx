// ═══════════════════════════════════════════════════════════════════════════
// ABOUT — bloque de texto editorial: frase grande, dos párrafos y datos reales
// Sin retrato: la foto del hero ya cumple esa función.
// ═══════════════════════════════════════════════════════════════════════════

import { useLanguage } from '../../context/LanguageContext';
import Reveal from '../ui/Reveal';
import './About.css';

const FACTS = ['Now', 'Study', 'Exp', 'Base'];

const About = () => {
    const { translate } = useLanguage();

    return (
        <section className="about section" id="about" aria-labelledby="about-title">
            <div className="container">
                <Reveal as="h2" className="about__headline" id="about-title">
                    {translate('aboutHeadline')}
                </Reveal>

                <div className="about__body">
                    <Reveal as="p" className="about__lead" delay={0.08}>
                        {translate('aboutDescription1')}
                    </Reveal>
                    <Reveal as="p" className="about__text" delay={0.14}>
                        {translate('aboutDescription2')}
                    </Reveal>
                </div>

                <Reveal as="dl" className="about__facts" delay={0.2}>
                    {FACTS.map((key) => (
                        <div key={key} className="about__fact">
                            <dt>{translate(`aboutFact${key}Label`)}</dt>
                            <dd>{translate(`aboutFact${key}Value`)}</dd>
                        </div>
                    ))}
                </Reveal>
            </div>
        </section>
    );
};

export default About;
