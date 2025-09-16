import React from 'react'

const ServicesPage: React.FC = () => {
  // const { setLayoutType } = UseLayout()

  React.useEffect(() => {
    // Set full-width layout for services page
    // setLayoutType('full-width')
  }, [])

  const services = [
    {
      icon: '🚀',
      title: 'Web Development',
      description: 'Modern, responsive websites using latest technologies',
      features: ['React & Vue.js', 'Node.js Backend', 'Database Design', 'API Integration'],
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      features: ['React Native', 'iOS & Android', 'App Store Deploy', 'Push Notifications'],
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interface design',
      features: ['Figma Design', 'Prototyping', 'User Research', 'Accessibility'],
    },
    {
      icon: '☁️',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment',
      features: ['AWS/Azure', 'Docker', 'CI/CD Pipeline', 'Monitoring'],
    },
  ]

  return (
    <>
      <div className="page-services">
        <section className="services-hero">
          <div className="wrp-container">
            <h1 className="services-title">Our Services</h1>
            <p className="services-subtitle">Comprehensive solutions for your digital needs</p>
          </div>
        </section>

        <section className="services-grid-section">
          <div className="wrp-container">
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="service-feature">
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="service-cta">Learn More</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="wrp-container">
            <div className="cta-content">
              <h2>Ready to Start Your Project?</h2>
              <p>Let's discuss how we can help bring your ideas to life</p>
              <div className="cta-buttons">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">View Portfolio</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ServicesPage
