import React from 'react';
import './index.scss';
import ContactForm from '@components/pages/contact/ContactForm/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="page-contact">
        <section className="contact-hero">
          <h1 className="contact-title">Get in touch</h1>
          <p className="contact-subtitle">
            Reach out, and let's create a universe of possibilities together!
          </p>
        </section>
        <div className="wrp-container">
          <section className="contact-content">
            <ContactForm action="/api/contact" />
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
