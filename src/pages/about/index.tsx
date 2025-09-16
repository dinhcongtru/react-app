import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="wrp-container page-about">
        <section className="page-hero">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Learn about our company and development team</p>
        </section>

        <section className="content-section">
          <div className="content-grid">
            <div className="content-block">
              <h2>Our Story</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>

            <div className="content-block">
              <h2>Our Mission</h2>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
              <ul className="feature-list">
                <li>✅ Innovation & Quality</li>
                <li>✅ Customer Satisfaction</li>
                <li>✅ Sustainable Growth</li>
                <li>✅ Team Excellence</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👨‍💻</div>
              <h3>John Doe</h3>
              <p className="team-role">Lead Developer</p>
              <p className="team-desc">Passionate about React and modern web technologies</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👩‍🎨</div>
              <h3>Jane Smith</h3>
              <p className="team-role">UI/UX Designer</p>
              <p className="team-desc">Creating beautiful and intuitive user experiences</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👨‍💼</div>
              <h3>Mike Johnson</h3>
              <p className="team-role">Project Manager</p>
              <p className="team-desc">Ensuring projects deliver on time and within scope</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutPage
