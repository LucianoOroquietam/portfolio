// ═══════════════════════════════════════════════════════════════════════════
// HOME PAGE — Premium Landing Page 2026
// Full Page Integration with All Sections
// ═══════════════════════════════════════════════════════════════════════════

import Hero from './sections/Hero';
import About from './sections/About';
import SkillsSection from './sections/SkillsSection';
import FeaturedProjects from './sections/FeaturedProjects';
import CTASection from './sections/CTASection';

const Home = () => {
    return (
        <main className="home-page">
            <Hero />
            <About />
            <SkillsSection />
            <FeaturedProjects />
            <CTASection />
        </main>
    );
};

export default Home;
