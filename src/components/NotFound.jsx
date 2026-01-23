// ═══════════════════════════════════════════════════════════════════════════
// 404 NOT FOUND — Premium Error Page 2026
// ═══════════════════════════════════════════════════════════════════════════

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import './NotFound.css';

const NotFound = () => {
    const { translate } = useLanguage();

    return (
        <main className="not-found-page">
            <div className="not-found-page__bg">
                <div className="not-found-page__grid" />
            </div>
            
            <div className="container">
                <motion.div 
                    className="not-found-page__content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <motion.span 
                        className="not-found-page__code"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        404
                    </motion.span>
                    
                    <h1 className="not-found-page__title">
                        {translate('notFoundTitle')}
                    </h1>
                    
                    <p className="not-found-page__description">
                        {translate('notFoundDescription')}
                    </p>
                    
                    <div className="not-found-page__actions">
                        <Link to="/home" className="btn btn-primary btn-lg">
                            <FiHome />
                            {translate('notFoundCta')}
                        </Link>
                        <button 
                            onClick={() => window.history.back()} 
                            className="btn btn-secondary btn-lg"
                        >
                            <FiArrowLeft />
                            {translate('notFoundBack')}
                        </button>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default NotFound;
