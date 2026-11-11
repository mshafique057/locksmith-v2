import React from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from '../components/ui.jsx';
export default function NotFound() {
  useTitle('Page not found | Bradford Locksmith Pro 24 7 Service', 'The page you requested could not be found.');
  return <section className="section not-found"><div className="container"><span className="eyebrow">404 · Page not found</span><h1>We could not find that page.</h1><p>Use the link below to return to the home page or browse the residential locksmith services.</p><Link className="button button-navy" to="/">Back to home</Link></div></section>;
}
