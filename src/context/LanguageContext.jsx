import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations'; 

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const storedLanguage = localStorage.getItem('language') || 'es'; // Usamos localStorage para recordar el idioma
  const [language, setLanguage] = useState(storedLanguage);

  // Guardar el idioma en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const translate = (key) => {
    return translations[language][key] || key; 
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para acceder al contexto de idioma
export const useLanguage = () => {
  return useContext(LanguageContext);
};
