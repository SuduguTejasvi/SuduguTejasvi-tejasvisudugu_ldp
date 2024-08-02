import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './organisms/NavHeader';
import Home from './organisms/Home';
import About from './organisms/About';
import Contact from './organisms/Contact';
import NotFound from './organisms/NotFound';

const NavigationPage: React.FC = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default NavigationPage;
