import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, ArrowUp, ChevronRight, Clock } from 'lucide-react';
import { BUSINESS, NAV, SERVICES } from '../data.js';
import Logo from './Logo.jsx';

function ContactPhone({ className = 'button button-amber' }) {
  return BUSINESS.phoneHref
    ? <a className={className} href={BUSINESS.phoneHref}><Phone size={17} /> Call for help</a>
    : <Link className={className} to="/contact"><Phone size={17} /> Contact us</Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <>
    <div className="topline"><div className="container topline-inner">
      <span><MapPin size={14} /> Residential locksmith in {BUSINESS.serviceArea}</span>
      <span><Clock size={14} /> {BUSINESS.hours}</span>
    </div></div>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label={`${BUSINESS.name} home`}><Logo /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV.map(item => <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}</NavLink>)}
        </nav>
        <div className="header-actions"><ContactPhone />
          <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <div id="mobile-navigation" className={`mobile-nav ${open ? 'open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile navigation" className="container">
          {NAV.map(item => <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}<ChevronRight size={17} /></NavLink>)}
          <ContactPhone className="button button-amber mobile-call" />
        </nav>
      </div>
    </header>
  </>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-about"><Link to="/" className="brand"><Logo /></Link>
        <p>Residential locksmith help for household doors, locks and windows in Bradford.</p>
        <span className="footer-note">Residential customers only</span>
      </div>
      <div><h3>Explore</h3><ul>{NAV.map(n => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}<li><Link to="/privacy-policy">Privacy policy</Link></li></ul></div>
      <div><h3>Home services</h3><ul>{SERVICES.slice(0, 6).map(s => <li key={s.slug}><Link to={s.path}>{s.title}</Link></li>)}</ul></div>
      <div><h3>Contact details</h3><ul className="footer-contact">
        <li><Phone size={16} />{BUSINESS.phoneHref ? <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a> : <span>{BUSINESS.phoneDisplay}</span>}</li>
        <li><Mail size={16} />{BUSINESS.emailHref ? <a href={BUSINESS.emailHref}>{BUSINESS.email}</a> : <span>{BUSINESS.email}</span>}</li>
        <li><MapPin size={16} /><span>{BUSINESS.address}</span></li>
      </ul><small className="hours-small">{BUSINESS.hours}</small></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} {BUSINESS.name}</span><span>Household locks, doors & windows in Bradford.</span></div>
  </footer>;
}

export function FloatingBits() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const fn = () => setVisible(window.scrollY > 520); window.addEventListener('scroll', fn, { passive: true }); return () => window.removeEventListener('scroll', fn); }, []);
  return <>
    <div className="mobile-contact"><ContactPhone className="button button-amber" /><Link className="button button-light" to="/contact">Send an enquiry</Link></div>
    <button className={`back-top ${visible ? 'visible' : ''}`} type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={19} /></button>
  </>;
}
