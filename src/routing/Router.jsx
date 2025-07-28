import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Index from '../components/Index.jsx'
import Contact from '../components/Contact.jsx'
import Portfolio from '../components/Portfolio.jsx'
import Curriculum from '../components/Curriculum.jsx'
import Header from '../components/layout/Header.jsx'
import NotFound from '../components/NotFound.jsx';
import Footer from '../components/layout/Footer.jsx'




const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Header></Header>
                <section className='content'>
                    <Routes>
                        <Route
                            className={({ isActive }) => isActive ? "active" : ""} path='/' element={<Navigate to={"/home"}/>}>
                        </Route>
                        <Route
                            className={({ isActive }) => isActive ? "active" : ""} path='/home' element={<Index></Index>}>
                        </Route>
                        <Route
                            className={({ isActive }) => isActive ? "active" : ""} path='/contact' element={<Contact />}>
                        </Route>
                        <Route
                            className={({ isActive }) => isActive ? "active" : ""} path='/portfolio' element={<Portfolio />}>
                        </Route>
                        <Route
                            className={({ isActive }) => isActive ? "active" : ""} path='/curriculum' element={<Curriculum />}>
                        </Route>
                        
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </section>
                <Footer></Footer>
            </BrowserRouter>
        </>
    )
}

export default Router
