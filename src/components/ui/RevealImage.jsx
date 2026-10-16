// Revelado de imágenes: se descubren de arriba hacia abajo al entrar en viewport.
// Distinto al fade-up de los textos para que la página no repita el mismo efecto.
// Con prefers-reduced-motion se muestra directamente.

import { motion, useReducedMotion } from 'framer-motion';

import { EASE } from '../../lib/motion';

const RevealImage = ({ className, children, delay = 0 }) => {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) return <div className={className}>{children}</div>;

    return (
        <motion.div
            className={className}
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 0.9, ease: EASE, delay }}
        >
            {children}
        </motion.div>
    );
};


export default RevealImage;
