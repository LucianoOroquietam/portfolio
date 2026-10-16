// Cabecera de sección: titular y subtítulo. Sin rótulos ni adornos: la jerarquía
// tipográfica alcanza para ordenar la página.

import Reveal from './Reveal';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle, id }) => (
    <header className="section-header">
        <Reveal as="h2" className="section-header__title" id={id}>
            {title}
        </Reveal>
        {subtitle && (
            <Reveal as="p" className="section-header__subtitle" delay={0.08}>
                {subtitle}
            </Reveal>
        )}
    </header>
);


export default SectionHeader;
