import React from 'react'
import Router from './routing/Router.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx';

const App = () => {
  return (
    <div className='layout'>
      <LanguageProvider>
        <Router></Router>
      </LanguageProvider>
    </div>
  );
}

export default App
