// Etapas del sistema, tomadas de la descripción real de cada proyecto
// (works.js → flujo). Estático: la información está en el orden de las etapas.
//   size="md": una línea de texto con flechas (junto a la descripción)
//   size="lg": diagrama vertical (cuando el proyecto no tiene captura propia)

import './SystemFlow.css';

const SystemFlow = ({ steps, label, size = 'md' }) => (
    <figure className={`system-flow system-flow--${size}`}>
        {label && <figcaption className="system-flow__label">{label}</figcaption>}
        <ol className="system-flow__list">
            {steps.map((step) => (
                <li key={step} className="system-flow__node">
                    <span className="system-flow__text">{step}</span>
                </li>
            ))}
        </ol>
    </figure>
);


export default SystemFlow;
