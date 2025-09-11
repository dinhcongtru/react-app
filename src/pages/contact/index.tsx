import React, { useState } from 'react'
interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

const ContactPage: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', form)
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.')
    // Reset form
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <div className="wrp-container page-contact">
        <section className="contact-hero">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Contact us to discuss your project
          </p>
        </section>

        <section className="contact-content">
          <div className="contact-layout">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h3>Email</h3>
                    <p>hello@reactapp.com</p>
                    <p>support@reactapp.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h3>Phone</h3>
                    <p>+84 123 456 789</p>
                    <p>+84 987 654 321</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h3>Office</h3>
                    <p>123 Tech Street</p>
                    <p>Ho Chi Minh City, Vietnam</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">🕐</div>
                  <div className="method-content">
                    <h3>Business Hours</h3>
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell us more about your project or inquiry..."
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactPage
