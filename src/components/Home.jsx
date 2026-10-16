// ═══════════════════════════════════════════════════════════════════════════
// HOME PAGE — Premium Landing Page 2026
// Full Page Integration with All Sections
// ═══════════════════════════════════════════════════════════════════════════

import Hero from './sections/Hero';
import About from './sections/About';
import ThinkingSection from './sections/ThinkingSection';
import FeaturedProjects from './sections/FeaturedProjects';
import SkillsSection from './sections/SkillsSection';
import CTASection from './sections/CTASection';
import SideRail from './ui/SideRail';

const Home = () => {
    return (
        <main className="home-page" id="main">
            <SideRail />
            <Hero />
            <About />
            <ThinkingSection />
            <FeaturedProjects />
            <SkillsSection />
            <CTASection />
        </main>
    );
};

export default Home;
