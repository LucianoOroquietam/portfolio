import React from 'react'
import Router from './routing/Router.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

const App = () => {
  return (
    <div className='layout'>
      <LanguageProvider>
        <Router></Router>
        <ScrollToTop />
      </LanguageProvider>
    </div>
  );
}

export default App
