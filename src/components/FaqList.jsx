import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
export default function FaqList({ items }) {
  const [open, setOpen] = useState(-1);
  return <div className="faq-list">{items.map((item, i) => <section className={`faq-item ${open === i ? 'expanded' : ''}`} key={item.q}>
    <h3><button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{item.q}<ChevronDown size={19} /></button></h3>
    {open === i && <div className="faq-answer"><p>{item.a}</p></div>}
  </section>)}</div>;
}
