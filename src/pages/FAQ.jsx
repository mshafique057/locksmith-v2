import React from 'react';
import { FAQS } from '../data.js';
import { useTitle, PageIntro, CtaBand } from '../components/ui.jsx';
import FaqList from '../components/FaqList.jsx';
export default function FAQ() {
  useTitle('FAQs | Bradford Locksmith Pro 24 7 Service', 'Answers to common questions about residential locksmith services in Bradford.');
  return <><PageIntro title="Frequently asked questions" text="Useful information about household lockouts, lost keys, lock repairs and contacting a residential locksmith." /><section className="section"><div className="container faq-page"><FaqList items={FAQS} /></div></section><CtaBand /></>;
}
