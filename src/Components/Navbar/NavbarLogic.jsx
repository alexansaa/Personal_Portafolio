import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/Navbar.module.css';
import userLogo from '../../assets/kleber_saavedra_logo.png';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'portfolio', text: 'Portfolio' },
  { path: 'contact', text: 'Contact' },
];

const Navbar = () => (
  <nav className={styles.nav}>
    <div className={styles.logo}>
      <img src={userLogo} alt="userLogo"></img>
    </div>
    <div className={`${styles.nav_opt} ${styles.nav_butons} ${styles.nav_bg_color}`}>
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