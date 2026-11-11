import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { SERVICES } from '../data.js';
import { useTitle, PageIntro, CtaBand, Reveal } from '../components/ui.jsx';
import { Icon } from '../components/ui.jsx';
export default function ServiceDetail({ fixedSlug }) {
  const { slug } = useParams(); const service = SERVICES.find(s => s.slug === (fixedSlug || slug));
  if (!service) return <section className="section"><div className="container"><h1>Service not found</h1><Link to="/services">Browse services</Link></div></section>;
  useTitle(`${service.title} in Bradford | Bradford Locksmith Pro`, `${service.title} for residential properties in Bradford. Find out what to expect and how to get in touch.`);
  return <><PageIntro title={service.title} text={service.short} image={service.image} />
    <section className="section"><div className="container detail-layout"><div className="detail-main"><span className="eyebrow">Residential locksmith service</span><h2>{service.title} in Bradford</h2><p className="detail-lead">{service.intro}</p><div className="detail-note"><Icon name={service.icon} size={23} /><p>{service.detail}</p></div><h3>When you may need this service</h3><ul className="detail-checks">{service.problems.map(x => <li key={x}><CheckCircle2 />{x}</li>)}</ul><h3>What to tell us</h3><p>When you get in touch, share your Bradford postcode, the type of door or window, and what happens when you use the key or handle. A photograph of the visible hardware can also help describe the issue.</p><Link className="button button-navy" to="/contact"><PhoneCall size={17} /> Contact us about this issue <ArrowRight size={16} /></Link></div>
      <Reveal className="detail-aside"><img src={service.image} alt={service.alt} loading="lazy" width="720" height="720" /><div><span className="eyebrow">Need to discuss a lock problem?</span><h3>Start with a description of the issue.</h3><p>We can help you understand which household service may be relevant.</p><Link className="text-link" to="/contact">Contact details <ArrowRight size={16} /></Link></div></Reveal></div></section>
    <section className="section section-ivory"><div className="container"><h2 className="related-heading">Other residential services</h2><div className="related-links">{SERVICES.filter(s => s.slug !== service.slug).slice(0, 4).map(s => <Link key={s.slug} to={s.path}>{s.title}<ArrowRight size={16} /></Link>)}</div></div></section><CtaBand /></>;
}
