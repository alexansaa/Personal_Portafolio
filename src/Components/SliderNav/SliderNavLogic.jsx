import { useEffect, useState } from 'react';

import { HashLink } from 'react-router-hash-link';

import styles from '../../styles/SliderNav.module.css';

function SlidingNavbar() {
  const [isVisible, setIsVisible] = useState(false);

  const links = [
    { name: 'About Me', link: '#littleAbout' },
    { name: 'Experience', link: '#littleExperience' },
    { name: 'Milestones', link: '#milestones' },
    { name: 'Recent Work', link: '#recentWork' },
    { name: 'Contact', link: '#contact' },
  ];

  const sliderStatic = "sliderNavCntStatic";

  useEffect(() => {
    const listenToScroll = () => {
      const heghtToHide = getOffset(
        document.getElementById(sliderStatic)
      );

      if (heghtToHide < 0.01 * window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [sliderStatic]);

  const getOffset = (element) => {
    const elementRect = element?.getBoundingClientRect();
    return elementRect?.top;
  };

  return (
    <div className={styles.sliderExp}>
      <div id={sliderStatic} className={styles.sliderCnt}>
        {(
          <nav className={isVisible ? `${styles.sliderNav} ${styles.stickyNav}` : `${styles.sliderNav}` }>
            <ul className={styles.SliderNavLines}>
              {links.map((element, index) => {
                return <li key={index}><HashLink to={element.link}>{element.name}</HashLink></li>
              })}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}

export default SlidingNavbar;
