import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, FloatingBits } from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import Areas from './pages/Areas.jsx';
import About from './pages/About.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return <>
    <Header />
    <main id="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/emergency-home-lockouts" element={<ServiceDetail fixedSlug="emergency-home-lockouts" />} />
        <Route path="/lock-changes-replacements" element={<ServiceDetail fixedSlug="lock-changes-replacements" />} />
        <Route path="/upvc-composite-door-lock-repairs" element={<ServiceDetail fixedSlug="upvc-composite-door-lock-repairs" />} />
        <Route path="/window-lock-repairs" element={<ServiceDetail fixedSlug="window-lock-repairs" />} />
        <Route path="/about" element={<About />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
    <FloatingBits />
  </>;
}
