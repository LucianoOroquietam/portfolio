// ═══════════════════════════════════════════════════════════════════════════
// HERO — saludo + nombre grande a la izquierda, retrato a sangre a la derecha
// Composición editorial: la foto se funde hacia el fondo oscuro.
// ═══════════════════════════════════════════════════════════════════════════

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';
import { EASE } from '../../lib/motion';
import './Hero.css';

const fade = (delay) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE, delay },
});

const Hero = () => {
    const { translate } = useLanguage();

    return (
        <section className="hero" id="inicio" aria-labelledby="hero-title">
            <motion.div
                className="hero__photo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: EASE, delay: 0.1 }}
                aria-hidden="true"
            >
                <img
                    src="/images/luciano-hero.webp"
                    alt=""
                    width="1295"
                    height="1214"
                    decoding="async"
                    fetchPriority="high"
                />
            </motion.div>

            <div className="hero__text container">
                <motion.p className="hero__greeting" {...fade(0.05)}>
                    {translate('heroGreeting')}
                </motion.p>

                <motion.h1 className="hero__name" id="hero-title" {...fade(0.15)}>
                    {translate('heroName')}
                    <span className="hero__dot" aria-hidden="true">.</span>
                </motion.h1>

                <motion.p className="hero__para" {...fade(0.3)}>
                    {translate('heroSubheadline')}
                </motion.p>

                <motion.div {...fade(0.45)}>
                    <a href="#projects" className="hero__pill">
                        {translate('heroCtaPrimary')}
                        <FiArrowRight />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
