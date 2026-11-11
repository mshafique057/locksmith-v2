import React from 'react';
import { SERVICES } from '../data.js';
import { useTitle, PageIntro, CtaBand, SectionHeading } from '../components/ui.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
export default function Services() {
  useTitle('Residential Locksmith Services in Bradford | Bradford Locksmith Pro', 'Explore household lock, door and window locksmith services in Bradford.');
  return <><PageIntro title="Residential locksmith services" text="Support for the locks, doors and windows around your home in Bradford." image="/uk_multipoint_handle.webp" />
    <section className="section"><div className="container"><SectionHeading eyebrow="Household lock problems" title="Choose the service you need" text="If you are not sure which service fits, describe the problem and the type of door or window when you contact us." /><div className="service-grid">{SERVICES.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}</div></div></section><CtaBand /></>;
}
