import React from 'react';
import { MapPin } from 'lucide-react';
import { BUSINESS, IMG } from '../data.js';
import { useTitle, PageIntro, CtaBand, Reveal } from '../components/ui.jsx';
export default function Areas() {
  useTitle('Areas Covered | Bradford Locksmith Pro 24 7 Service', 'Residential locksmith service area information for Bradford.');
  return <><PageIntro title="Areas we cover" text="Residential locksmith enquiries for properties in Bradford, West Yorkshire." image={IMG.door} />
    <section className="section"><div className="container area-detail"><Reveal><span className="eyebrow">Local coverage</span><h2>Bradford, West Yorkshire</h2><p className="detail-lead">The confirmed service location for this website is Bradford. We do not list additional towns or neighbourhoods without confirmation that they are covered.</p><p>If you are in Bradford and need help with a household lock, door or window, contact us with your postcode and a short description of the issue. Coverage can be checked before any visit is arranged.</p><div className="area-pin"><MapPin /><div><strong>{BUSINESS.serviceArea}</strong><span>Residential service area</span></div></div></Reveal><Reveal className="area-detail-image"><img src={IMG.door} alt="Front entrance of a typical UK residential property" loading="lazy" width="900" height="680" /></Reveal></div></section><CtaBand title="Are you in the Bradford area?" text="Share your postcode and the household lock problem so coverage can be confirmed." /></>;
}
