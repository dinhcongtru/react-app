import React from 'react'
import { NavLink } from 'react-router-dom'

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`l-footer ${className}`}>
      <div className="wrp-container">
        <div className="footer-content">
          <div className="footer-content__main">
            <div className="footer-brand">
              <img 
                src="/vite.svg" 
                alt="Logo" 
                width="24" 
                height="24"
              />
              <span>React App</span>
            </div>
            
            <nav className="footer-nav">
              <div className="footer-nav__section">
                <h3 className="footer-nav__title">Company</h3>
                <ul className="footer-nav__list">
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/services">Services</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </div>
               
              <div className="footer-nav__section">
                <h3 className="footer-nav__title">Pages</h3>
                <ul className="footer-nav__list">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/services">Services</NavLink></li>
                </ul>
              </div>
             </nav>
          </div>
          
          <div className="footer-content__bottom">
            <p className="footer-copyright">
              © {new Date().getFullYear()} React App. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
