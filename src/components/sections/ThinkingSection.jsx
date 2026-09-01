// ═══════════════════════════════════════════════════════════════════════════
// THINKING SECTION — ¿Cuál es tu forma de pensar?
// 3 pasos que definen el enfoque de Luciano
// ═══════════════════════════════════════════════════════════════════════════

import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiSearch, FiTarget, FiZap } from 'react-icons/fi';
import './ThinkingSection.css';

const ThinkingSection = () => {
    const { translate } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    const steps = [
        {
            icon: <FiSearch />,
            number: translate('thinkingStep1Number'),
            title: translate('thinkingStep1Title'),
            desc: translate('thinkingStep1Desc'),
            color: '#f97316',
        },
        {
            icon: <FiTarget />,
            number: translate('thinkingStep2Number'),
            title: translate('thinkingStep2Title'),
            desc: translate('thinkingStep2Desc'),
            color: '#fb923c',
        },
        {
            icon: <FiZap />,
            number: translate('thinkingStep3Number'),
            title: translate('thinkingStep3Title'),
            desc: translate('thinkingStep3Desc'),
            color: '#fdba74',
        },
    ];

    return (
        <section className="thinking-section section" id="thinking" ref={ref}>
            {/* Background decorative orb */}
            <div className="thinking-section__bg-orb" />

            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="thinking-section__header"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.span variants={itemVariants} className="thinking-section__label">
                        {translate('thinkingSectionLabel')}
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="thinking-section__headline">
                        {translate('thinkingHeadline')}
                    </motion.h2>
                    <motion.p variants={itemVariants} className="thinking-section__subheadline">
                        {translate('thinkingSubheadline')}
                    </motion.p>
                </motion.div>

                {/* Steps */}
                <motion.div
                    className="thinking-section__steps"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            variants={itemVariants}
                            className="thinking-step"
                            style={{ '--step-color': step.color }}
                        >
                            {/* Connector line (between cards) */}
                            {index < steps.length - 1 && (
                                <div className="thinking-step__connector" />
                            )}

                            {/* Number badge */}
                            <div className="thinking-step__number-badge">
                                {step.number}
                            </div>

                            {/* Icon */}
                            <div className="thinking-step__icon-wrapper">
                                {step.icon}
                            </div>

                            {/* Content */}
                            <div className="thinking-step__content">
                                <h3 className="thinking-step__title">{step.title}</h3>
                                <p className="thinking-step__desc">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ThinkingSection;
