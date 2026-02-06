// ═══════════════════════════════════════════════════════════════════════════
// CONTACT PAGE — Premium Design 2026
// ═══════════════════════════════════════════════════════════════════════════

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useLanguage } from '../context/LanguageContext';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiX } from 'react-icons/fi';
import './ContactPage.css';

const ContactPage = () => {
    const { translate } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs
            .send(
                'service_s9tshsp',
                'template_e4xyzv7',
                formData,
                'ELH78UW8hdQwdFfDx'
            )
            .then(
                () => {
                    setStatus('success');
                    setFormData({ name: '', email: '', message: '' });
                    setTimeout(() => setStatus('idle'), 5000);
                },
                () => {
                    setStatus('error');
                    setTimeout(() => setStatus('idle'), 5000);
                }
            );
    };

    const contactInfo = [
        {
            icon: <FiMail />,
            label: translate('contactEmailLabel'),
            value: 'oroquietaluciano@gmail.com',
            href: 'mailto:oroquietaluciano@gmail.com'
        },
        {
            icon: <FiPhone />,
            label: translate('contactPhoneLabel'),
            value: '+54 2281 534974',
            href: 'tel:+542281534974'
        },
        {
            icon: <FiMapPin />,
            label: translate('contactLocationLabel'),
            value: translate('contactLocation'),
            href: null
        },
    ];

    const socialLinks = [
        { icon: <FiGithub />, href: 'https://github.com/LucianoOroquietam', label: 'GitHub' },
        { icon: <FiLinkedin />, href: 'https://linkedin.com/in/luciano-oroquieta', label: 'LinkedIn' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    return (
        <main className="contact-page">
            <div className="container">
                <motion.div 
                    className="contact-page__wrapper"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header */}
                    <motion.div variants={itemVariants} className="contact-page__header">
                        <span className="contact-page__label">{translate('contactSectionLabel')}</span>
                        <h1 className="contact-page__headline">{translate('contactHeadline')}</h1>
                        <p className="contact-page__subheadline">{translate('contactSubheadline')}</p>
                    </motion.div>

                    {/* Content Grid */}
                    <div className="contact-page__grid">
                        {/* Form */}
                        <motion.div variants={itemVariants} className="contact-page__form-wrapper">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="contact-form__group">
                                    <label className="label" htmlFor="name">
                                        {translate('contactFormName')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="input"
                                        placeholder={translate('contactFormNamePlaceholder')}
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="contact-form__group">
                                    <label className="label" htmlFor="email">
                                        {translate('contactFormEmail')}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="input"
                                        placeholder={translate('contactFormEmailPlaceholder')}
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="contact-form__group">
                                    <label className="label" htmlFor="message">
                                        {translate('contactFormMessage')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="input"
                                        placeholder={translate('contactFormMessagePlaceholder')}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className={`btn btn-primary btn-lg contact-form__submit ${status !== 'idle' ? 'contact-form__submit--' + status : ''}`}
                                    disabled={status === 'sending'}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {status === 'idle' && (
                                        <>
                                            <FiSend />
                                            {translate('contactFormSubmit')}
                                        </>
                                    )}
                                    {status === 'sending' && (
                                        <>
                                            <span className="contact-form__spinner" />
                                            {translate('contactFormSending')}
                                        </>
                                    )}
                                    {status === 'success' && (
                                        <>
                                            <FiCheck />
                                            {translate('contactFormSuccess')}
                                        </>
                                    )}
                                    {status === 'error' && (
                                        <>
                                            <FiX />
                                            {translate('contactFormError')}
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Info Side */}
                        <motion.div variants={itemVariants} className="contact-page__info">
                            {/* Contact Info */}
                            <div className="contact-info">
                                <h3 className="contact-info__title">{translate('contactInfoTitle')}</h3>
                                <div className="contact-info__list">
                                    {contactInfo.map((item, index) => (
                                        <div key={index} className="contact-info__item">
                                            <div className="contact-info__icon">{item.icon}</div>
                                            <div className="contact-info__content">
                                                <span className="contact-info__label">{item.label}</span>
                                                {item.href ? (
                                                    <a href={item.href} className="contact-info__value">
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <span className="contact-info__value">{item.value}</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="contact-social">
                                <h3 className="contact-social__title">{translate('contactSocialLabel')}</h3>
                                <div className="contact-social__links">
                                    {socialLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="contact-social__link"
                                            aria-label={link.label}
                                        >
                                            {link.icon}
                                            <span>{link.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Availability Badge */}
                            <div className="contact-availability">
                                <div className="contact-availability__dot" />
                                <span>{translate('contactAvailability')}</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default ContactPage;
