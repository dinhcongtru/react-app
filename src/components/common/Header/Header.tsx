import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`l-header ${className}`}>
      <div className="wrp-container">
        <nav className="nav-global">
          <div className="nav-brand">
            <NavLink to="/" className="nav-brand__link">
              <img src="/vite.svg" alt="Logo" className="nav-brand__logo" width="32" height="32" />
              <span className="nav-brand__text">React App</span>
            </NavLink>
          </div>
          <ul className="nav-menu">
            <li className="nav-menu__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-menu__link ${isActive ? 'nav-menu__link--active' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-menu__item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-menu__link ${isActive ? 'nav-menu__link--active' : ''}`
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-menu__item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `nav-menu__link ${isActive ? 'nav-menu__link--active' : ''}`
                }
              >
                Services
              </NavLink>
            </li>
            <li className="nav-menu__item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-menu__link ${isActive ? 'nav-menu__link--active' : ''}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
