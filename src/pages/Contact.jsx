import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock3, Send, AlertCircle } from 'lucide-react';
import { BUSINESS, SERVICES } from '../data.js';
import { useTitle, PageIntro } from '../components/ui.jsx';
export default function Contact() {
  useTitle('Contact | Bradford Locksmith Pro 24 7 Service', 'Contact Bradford Locksmith Pro about residential home lock, door and window issues.');
  const [status, setStatus] = useState(''); const [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault(); setStatus('');
    if (!BUSINESS.formEndpoint) { setStatus('not-connected'); return; }
    setBusy(true);
    try {
      const response = await fetch(BUSINESS.formEndpoint, { method: 'POST', body: new FormData(e.currentTarget), headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('sent'); e.currentTarget.reset();
    } catch { setStatus('error'); } finally { setBusy(false); }
  }
  return <><PageIntro title="Contact" text="Tell us about the household lock, door or window problem you need help with in Bradford." />
    <section className="section"><div className="container contact-layout"><div className="contact-copy"><span className="eyebrow">Get in touch</span><h2>Let's understand what has happened.</h2><p>Share your postcode, the type of door or window and a brief description of the issue. Operating hours and availability should be confirmed directly.</p>
      <div className="contact-detail"><Phone /><div><strong>Telephone</strong><span>{BUSINESS.phoneDisplay}</span></div></div>
      <div className="contact-detail"><Mail /><div><strong>Email</strong><span>{BUSINESS.email}</span></div></div>
      <div className="contact-detail"><MapPin /><div><strong>Service area</strong><span>{BUSINESS.address}</span></div></div>
      <div className="contact-detail"><Clock3 /><div><strong>Operating hours</strong><span>{BUSINESS.hours}</span></div></div>
      <p className="contact-footnote">Contact details are shown for reference. Telephone and email links become active when real details are added to the business configuration.</p>
    </div>
    <div className="contact-form-wrap"><form className="contact-form" onSubmit={submit}>
      <h2>Describe your lock problem</h2><p>Fields marked with * are required.</p>
      <div className="form-two"><label>Your name *<input name="name" autoComplete="name" required minLength="2" maxLength="100" /></label><label>Phone or email *<input name="contact" required minLength="5" maxLength="150" /></label></div>
      <label>Bradford postcode<input name="postcode" autoComplete="postal-code" maxLength="12" placeholder="e.g. BD1 1AA" /></label>
      <label>Service needed *<select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{SERVICES.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}<option value="Not sure">I am not sure</option></select></label>
      <label>Message *<textarea name="message" required minLength="10" maxLength="2000" rows="5" placeholder="Tell us what has happened and what type of door or window is involved." /></label>
      <button className="button button-navy submit-button" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Send enquiry'} <Send size={17} /></button>
      {!BUSINESS.formEndpoint && <p className="form-state form-info"><AlertCircle size={17} /> Online enquiries are not currently enabled. The form is ready for connection once a submission endpoint is configured.</p>}
      {status === 'sent' && <p className="form-state form-success" role="status">Your enquiry has been submitted.</p>}
      {status === 'error' && <p className="form-state form-error" role="alert">We could not submit your enquiry. Please try again later.</p>}
      {status === 'not-connected' && <p className="form-state form-info" role="status">The enquiry form is not connected yet.</p>}
      <small>Information submitted through this form will be handled in line with the <a href="/privacy-policy">privacy policy</a>.</small>
    </form></div></div></section></>;
}
