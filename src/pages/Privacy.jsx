import React from 'react';
import { BUSINESS } from '../data.js';
import { useTitle, PageIntro } from '../components/ui.jsx';
export default function Privacy() {
  useTitle('Privacy Policy | Bradford Locksmith Pro 24 7 Service', 'Draft privacy information for enquiries to Bradford Locksmith Pro 24 7 Service.');
  return <><PageIntro title="Privacy policy" text="How information may be handled when you contact Bradford Locksmith Pro 24 7 Service." />
    <section className="section"><article className="container legal-copy"><p><strong>Last reviewed:</strong> November 2026</p><p>This page is a configurable draft for Bradford Locksmith Pro 24 7 Service. The business should confirm the details below and obtain appropriate advice before publishing it as its final privacy notice.</p>
      <h2>Who is responsible for your information?</h2><p>The data controller is the operator of {BUSINESS.name}. Contact details for privacy enquiries should be added before publication.</p>
      <h2>What information may be collected?</h2><p>If you contact the business, information may include your name, contact details, postcode, the type of residential locksmith service requested and the details you choose to include in your message.</p>
      <h2>Why information may be used</h2><p>Enquiry information may be used to respond to your request, discuss a household lock or door issue, arrange a service where agreed, maintain relevant business records and meet legal obligations.</p>
      <h2>How information is shared</h2><p>Personal information should only be shared where necessary to provide the requested service, operate the enquiry system, comply with legal obligations or otherwise where a lawful basis applies. Any form provider or hosting provider should be identified in the final notice.</p>
      <h2>How long information is kept</h2><p>The business should set and document appropriate retention periods based on the purpose of the information and applicable legal requirements.</p>
      <h2>Your data protection rights</h2><p>Depending on the circumstances, you may have rights to request access, correction, deletion, restriction or portability of personal information, and to object to certain processing. You may also complain to the UK Information Commissioner's Office.</p>
      <h2>Cookies and analytics</h2><p>This project does not intentionally add advertising or analytics trackers. If analytics, embedded maps, chat tools or other third-party services are added, this notice and any required cookie controls must be updated.</p>
      <h2>Contact</h2><p>For privacy questions, use the business contact details once confirmed: {BUSINESS.email}.</p>
    </article></section></>;
}
