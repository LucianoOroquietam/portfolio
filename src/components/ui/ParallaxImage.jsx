// Imagen con parallax: se desplaza contra el scroll y tiene un sobredimensionado
// para que nunca deje bordes vacíos dentro del marco.
// Desktop: desplazamiento visible. Mobile: más chico. Con prefers-reduced-motion: estática.

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const SHIFT_DESKTOP = 24; // px
const SHIFT_MOBILE = 8;   // px
const OVERSCALE = 1.12;   // 6% extra por lado: cubre el desplazamiento en ambos casos

const isMobile = () => typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches;

const ParallaxImage = ({ src, alt = '', width, height, loading = 'lazy', className }) => {
    const ref = useRef(null);
    const reduceMotion = useReducedMotion();
    const shift = reduceMotion ? 0 : isMobile() ? SHIFT_MOBILE : SHIFT_DESKTOP;

    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 1], [-shift, shift]);

    return (
        <motion.img
            ref={ref}
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            decoding="async"
            className={className}
            style={{ y, scale: reduceMotion ? 1 : OVERSCALE }}
        />
    );
};

export default ParallaxImage;
