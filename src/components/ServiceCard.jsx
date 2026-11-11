import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, Icon } from './ui.jsx';
export default function ServiceCard({ service, index = 0 }) {
  return <Reveal delay={(index % 3) * 0.05}><Link to={service.path} className="service-card">
    <div className="service-card-image"><img src={service.image} alt={service.alt} loading="lazy" width="720" height="480" /><span className="service-icon"><Icon name={service.icon} size={22} /></span></div>
    <div className="service-card-content"><h3>{service.title}</h3><p>{service.short}</p><span className="text-link">Explore service <ArrowUpRight size={17} /></span></div>
  </Link></Reveal>;
}
