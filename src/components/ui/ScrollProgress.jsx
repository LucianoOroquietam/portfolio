// Barra de progreso de lectura: una línea fina arriba que crece con el scroll.
// Es el único elemento decorativo de movimiento global.

import { motion, useScroll, useSpring } from 'framer-motion';
import './ScrollProgress.css';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    // suavizado leve para que no salte con la rueda del mouse
    const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

    return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
};

export default ScrollProgress;
