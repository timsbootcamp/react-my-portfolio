import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavTabs.css'

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link testclass' 
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link testclass'
          }
        >
          Projects
        </NavLink>
      </li>
      {/* <li className="nav-item">
        <NavLink
          to="blog"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link testclass'
          }
        >
          Blog
        </NavLink>
      </li> */}
      <li className="nav-item">
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link testclass'
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
