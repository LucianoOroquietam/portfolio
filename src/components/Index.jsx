// src/components/Index.jsx
import { useEffect, useState } from 'react';
import { works } from '../data/works';
import { motion } from 'framer-motion';
import './index.css';
import Skills from './Skills';
import lulo from '../assets/lulo.jpg';
import techLogos from '../assets/icons/techLogos';
import { useLanguage } from '../context/LanguageContext';
import { FiExternalLink } from "react-icons/fi";

const Index = () => {
  const { translate } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);



  return (
    <div className={`home ${isVisible ? 'visible' : ''}`}>

      <div className="divider"></div>

      <div className="presentation-container">
        <img src={lulo} alt="Foto de Luciano Oroquieta" className="profile-photo" itemProp="image" />
        <h1 className="title" itemProp="name">
          <span className="name">{translate('greeting')}</span>
          <span className="role" itemProp="jobTitle">{translate('role')}</span>
          <span className="education" itemProp="description">{translate('degree')}</span>
        </h1>
        <p className="work-details">{translate('description')}</p>
      </div>

      <div className="divider"></div>

      <Skills />

      <div className="divider"></div>

      <section className="last-works">
        <h2 className="heading">{translate('titleProjects')}</h2>
        <div className="works">
          {works.map(i => (
            <motion.article
              key={i.id}
              className="work-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: i.id * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="card-image">
                <img className="img-portfolio" src={`/images/${i.nombre}.png`} alt="imagen proyecto" />
              </div>



              <div className="card-content">
                <img className="tech-logo"
                  src={techLogos[i.tecnologias?.[0]] || techLogos['Html']}
                  alt={i.tecnologias?.[0] || 'Sin tecnología'} />
                <h2>{translate(`${i.nombre}_name`)}</h2>
                <p>{translate(`${i.nombre}_description`)}</p>

                {i.url && (
                  <motion.a
                    href={i.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="learn-more repo-link"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiExternalLink className="icon" />
                    {translate('verProyecto')}
                  </motion.a>
                )}

                {i.urlRepo && (
                  <motion.a
                    href={i.urlRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="learn-more repo-link"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={techLogos.github}
                      alt="GitHub"
                      className="github-icon"
                    />
                    {translate('verRepositorio')}
                  </motion.a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
