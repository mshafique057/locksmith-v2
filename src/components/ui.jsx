import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { DoorOpen, KeyRound, Wrench, ShieldCheck, AppWindow, LockKeyhole, Key, House, Phone, ArrowRight } from 'lucide-react';
import { BUSINESS } from '../data.js';
const ICONS = { DoorOpen, KeyRound, Wrench, ShieldCheck, AppWindow, LockKeyhole, Key, House };
export function Icon({ name, size = 24 }) { const C = ICONS[name] || KeyRound; return <C size={size} strokeWidth={1.8} aria-hidden="true" />; }
export function useTitle(title, description) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = description || '';
  }, [title, description]);
}
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null); const [shown, setShown] = useState(false);
  useEffect(() => {
    const node = ref.current; if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) { setShown(true); return; }
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setShown(true); observer.disconnect(); } }, { threshold: 0.08 });
    observer.observe(node); return () => observer.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${shown ? 'shown' : ''} ${className}`} style={{ '--reveal-delay': `${delay}s` }}>{children}</Tag>;
}
export function SectionHeading({ eyebrow, title, text, align = 'center' }) {
  return <div className={`section-heading ${align === 'left' ? 'align-left' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}
export function PageIntro({ eyebrow = 'Bradford Locksmith Pro 24 7 Service', title, text, image }) {
  return <section className="page-intro"><div className="container page-intro-inner"><div><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>{title}</span></div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div>{image && <img src={image} alt="" fetchPriority="high" />}</div></section>;
}
export function CtaBand({ title = 'Need help with a household lock?', text = 'Tell us what has happened and where in Bradford the property is located. We can discuss the next step.' }) {
  return <section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow eyebrow-light">Residential locksmith support</span><h2>{title}</h2><p>{text}</p></div><Link className="button button-amber" to="/contact"><Phone size={17} /> Contact the locksmith <ArrowRight size={16} /></Link></div></section>;
}
