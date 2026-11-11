import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock3, DoorOpen, KeyRound, AppWindow, Wrench, MapPin, PhoneCall } from 'lucide-react';
import { BUSINESS, IMG, SERVICES, PROBLEMS, FAQS } from '../data.js';
import { useTitle, Reveal, SectionHeading, CtaBand } from '../components/ui.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import FaqList from '../components/FaqList.jsx';

export default function Home() {
  useTitle('Bradford Locksmith Pro 24 7 Service | Residential Locksmith Bradford', 'Residential locksmith services in Bradford for home lockouts, lock changes, lost keys, uPVC and composite door locks, and window lock repairs.');
  return <>
    <section className="hero-home">
      <div className="hero-image"><img src={IMG.door} alt="Modern UK composite residential front door with glazed panel and door handle" fetchPriority="high" /></div>
      <div className="hero-shade" />
      <div className="container hero-content"><div className="hero-copy">
        <span className="hero-kicker"><span /> Residential locksmith · Bradford</span>
        <h1>Locked out? Get help with your <em>home locks</em> in Bradford.</h1>
        <p>Practical help for household doors, keys and windows — from a door that will not open to a lock that needs replacing.</p>
        <div className="hero-buttons"><Link className="button button-amber" to="/contact"><PhoneCall size={17} /> Call for help</Link><Link className="button button-outline-light" to="/services">Explore services <ArrowRight size={17} /></Link></div>
        <div className="hero-assurance"><span><CheckCircle2 size={16} /> Residential homes only</span><span><MapPin size={16} /> Bradford service area</span></div>
      </div></div>
      <div className="hero-index"><span>01</span><span className="hero-index-line" /><span>Home locksmith services</span></div>
    </section>

    <section className="service-ribbon"><div className="container ribbon-grid"><Link to="/services/emergency-home-lockouts"><DoorOpen /> <span>Home lockouts</span></Link><Link to="/services/lock-changes-replacements"><KeyRound /> <span>Lock changes</span></Link><Link to="/services/upvc-composite-door-lock-repairs"><Wrench /> <span>Door lock repairs</span></Link><Link to="/services/window-lock-repairs"><AppWindow /> <span>Window locks</span></Link></div></section>

    <section className="section section-ivory"><div className="container"><SectionHeading eyebrow="Residential locksmith services" title="Help with the locks that protect your home" text="From a lost key to a faulty multipoint mechanism, get clear guidance on the household lock problem you are facing." />
      <div className="service-grid">{SERVICES.slice(0, 6).map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}</div>
      <div className="section-bottom-link"><Link className="text-link" to="/services">View all residential services <ArrowRight size={17} /></Link></div>
    </div></section>

    <section className="section"><div className="container split-layout"><Reveal className="split-photo"><img src={IMG.multipoint} alt="Multipoint locking mechanism and handle used on a UK residential door" loading="lazy" width="900" height="1000" /><div className="photo-caption"><span>Door hardware</span><strong>uPVC & composite locks</strong></div></Reveal><Reveal className="split-copy"><span className="eyebrow">Common household problems</span><h2>When a door or window stops working as it should</h2><p className="intro-copy">Lock problems can have several causes. A little detail about what the key and handle are doing can help narrow down the type of repair needed.</p>
      <div className="problem-list">{PROBLEMS.map(p => <Link to={p.link} key={p.id}><span><CheckCircle2 size={18} /></span><span><strong>{p.title}</strong><small>{p.text}</small></span><ArrowRight size={17} /></Link>)}</div>
    </Reveal></div></section>

    <section className="section section-navy"><div className="container"><SectionHeading eyebrow="A clear process" title="What happens next" text="A straightforward conversation helps establish the problem and the right next step." />
      <div className="process-grid"><Reveal><span className="process-number">01</span><h3>Describe the issue</h3><p>Tell us what has happened, the type of door or window and your Bradford postcode.</p></Reveal><Reveal delay={0.07}><span className="process-number">02</span><h3>Discuss the options</h3><p>We can talk through the likely cause, whether an assessment is needed and the work that may be involved.</p></Reveal><Reveal delay={0.14}><span className="process-number">03</span><h3>Agree before work</h3><p>Any proposed work and its price should be explained and agreed before it begins.</p></Reveal></div>
    </div></section>

    <section className="section section-ivory"><div className="container split-layout area-layout"><Reveal className="split-copy"><span className="eyebrow">Local service area</span><h2>Residential locksmith help in Bradford</h2><p className="intro-copy">The service is focused on household locks, doors and windows in Bradford. Share your postcode and the type of property when you get in touch so coverage can be checked.</p><ul className="tick-list"><li><CheckCircle2 /> Homeowners and tenants</li><li><CheckCircle2 /> Landlords arranging residential lock work</li><li><CheckCircle2 /> People moving into a new home</li></ul><Link className="button button-navy" to="/areas">About the Bradford service area <ArrowRight size={17} /></Link></Reveal><Reveal className="area-visual"><img src={IMG.door} alt="Residential entrance to a UK home" loading="lazy" width="900" height="760" /><div className="area-stamp"><MapPin size={20} /><strong>Bradford</strong><span>West Yorkshire</span></div></Reveal></div></section>

    <section className="section"><div className="container faq-home-grid"><div><span className="eyebrow">Useful information</span><h2>Questions about home locksmith work?</h2><p>Find straightforward answers about lockouts, replacement locks and common household door problems.</p><Link className="text-link" to="/faqs">Read all FAQs <ArrowRight size={17} /></Link></div><FaqList items={FAQS.slice(0, 5)} /></div></section>

    <CtaBand title="Tell us what has happened with your home lock." text="For a household lock, door or window issue in Bradford, get in touch to discuss the next step." />
  </>;
}
