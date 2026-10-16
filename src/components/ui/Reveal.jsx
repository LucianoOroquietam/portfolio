// Revelado al entrar en viewport. Única fuente de la escala de motion de entradas:
// 600 ms, easing expo, 20 px de desplazamiento. Con prefers-reduced-motion
// (MotionConfig en App) solo se anima la opacidad.

import { motion } from 'framer-motion';

import { EASE } from '../../lib/motion';

const Reveal = ({ as = 'div', delay = 0, y = 20, className, children, ...rest }) => {
    const Component = motion[as];
    return (
        <Component
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            transition={{ duration: 0.6, ease: EASE, delay }}
            {...rest}
        >
            {children}
        </Component>
    );
};


export default Reveal;
