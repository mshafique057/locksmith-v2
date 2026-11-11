import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, House, KeyRound, AppWindow } from 'lucide-react';
import { IMG } from '../data.js';
import { useTitle, PageIntro, CtaBand, Reveal } from '../components/ui.jsx';
export default function About() {
  useTitle('About | Bradford Locksmith Pro 24 7 Service', 'Learn about the residential locksmith services offered in Bradford.');
  return <><PageIntro title="About the service" text="A residential locksmith service focused on household doors, locks and windows in Bradford." image={IMG.door} />
    <section className="section"><div className="container split-layout"><Reveal className="split-photo"><img src={IMG.handle} alt="Close-up of a household door handle and lock" loading="lazy" width="900" height="1000" /></Reveal><div className="split-copy"><span className="eyebrow">A home-first approach</span><h2>Focused on the locks around your home</h2><p className="intro-copy">Bradford Locksmith Pro 24 7 Service is presented as a residential locksmith service for people dealing with everyday household lock and door problems.</p><p>That includes lock changes, home lockouts, lost or broken keys, faulty uPVC and composite door mechanisms, and residential window locks.</p><p>The aim is to make the next step clear: understand what has happened, identify the type of lock involved and discuss the work before anything is carried out.</p><Link className="button button-navy" to="/services">Explore residential services <CheckCircle2 size={17} /></Link></div></div></section>
    <section className="section section-ivory"><div className="container"><div className="three-points"><div><House /><h3>Household doors</h3><p>Help with common residential door locks and locking mechanisms.</p></div><div><KeyRound /><h3>Keys & cylinders</h3><p>Support with lost, stolen, broken or stuck household keys.</p></div><div><AppWindow /><h3>Window locks</h3><p>Residential window handle and lock repairs or replacements.</p></div></div></div></section><CtaBand />
  </>;
}
