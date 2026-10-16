import { MotionConfig } from 'framer-motion';
import Router from './routing/Router.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ScrollProgress from './components/ui/ScrollProgress.jsx';

const App = () => {
  return (
    <div className='layout'>
      <LanguageProvider>
        {/* reducedMotion="user": respeta prefers-reduced-motion en todas las animaciones de framer-motion */}
        <MotionConfig reducedMotion="user">
          <ScrollProgress />
          <Router></Router>
          <ScrollToTop />
        </MotionConfig>
      </LanguageProvider>
    </div>
  );
}

export default App
