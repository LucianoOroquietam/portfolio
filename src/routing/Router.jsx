// ═══════════════════════════════════════════════════════════════════════════
// ROUTER — Premium Portfolio Navigation 2026
// ═══════════════════════════════════════════════════════════════════════════

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../components/Home.jsx'
import ContactPage from '../components/ContactPage.jsx'
import PortfolioPage from '../components/PortfolioPage.jsx'
import CurriculumPage from '../components/CurriculumPage.jsx'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import NotFound from '../components/NotFound.jsx'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Navigate to="/home" replace />} />
                <Route path='/home' element={<Home />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/portfolio' element={<PortfolioPage />} />
                <Route path='/curriculum' element={<CurriculumPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router
