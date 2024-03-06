import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'portfolio', text: 'Portfolio' },
  { path: 'contact', text: 'Contact' },
];

const Navbar = () => (
  <nav>
    <div>
      <ul>
        {links.map((link) => (
          <React.Fragment key={link.text}>
            <li>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;