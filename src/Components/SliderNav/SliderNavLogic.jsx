import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import React, { useRef } from 'react';

import { HashLink } from 'react-router-hash-link';

import styles from '../../styles/SliderNav.module.css';

function SlidingNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  // const [navHeight, setNavHeight] = useState();

  const sliderStatic = "sliderNavCntStatic";
  const sliderFix = "sliderNavCntFix";

  useEffect(() => {

    const printHeight = (heghtToHide) => {
      console.log("Height to hide: " + heghtToHide);
    };

    const listenToScroll = () => {
      const heghtToHide = getOffset(
        document.getElementById(sliderStatic)
      );
      const windowScrollHeight = document.body.scrollTop || document.documentElement.scrollTop;

      // console.log("window scroll height: " + windowScrollHeight);
      // printHeight("height to hide: " + heghtToHide);
      // console.log("window height: " + window.innerHeight);
      // console.log("element height: " + navHeight);

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
    <>
      <div id={sliderFix} className={styles.sliderCnt}>
        {isVisible && (
          <nav className={`${styles.sliderNav} ${styles.stickyNav}`}>
            <ul>
              <li><HashLink to="#littleAbout">About Me</HashLink ></li>
              <hr className={styles.horizontalLine}></hr>
              <li><HashLink to="#littleExperience">Experience</HashLink></li>
              <hr className={styles.horizontalLine}></hr>
              <li><HashLink to="#milestones">Milestones</HashLink></li>
              <hr className={styles.horizontalLine}></hr>
              <li><HashLink to="#recentWork">Recent Work</HashLink></li>
              <hr className={styles.horizontalLine}></hr>
              <li><HashLink to="#contact">Contact</HashLink></li>
            </ul>
          </nav>
        )}
      </div>
      <div id={sliderStatic} className={`${isVisible ? styles.sliderCnt_invisible : styles.sliderCnt}`}>
        {(
          <nav className={`${styles.sliderNav}`}>
            <ul>
              <li><HashLink to="#littleAbout">About Me</HashLink ></li>
              <hr className={styles.horizontalLine}></hr>
              <li><HashLink to="#littleExperience">Experience</HashLink></li>
              <hr className={styles.horizontalLine}></hr>
              <li><HashLink to="#milestones">Milestones</HashLink></li>
              <hr className={styles.horizontalLine}></hr>
              <li><HashLink to="#recentWork">Recent Work</HashLink></li>
              <hr className={styles.horizontalLine}></hr>
              <li><HashLink to="#contact">Contact</HashLink></li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}

export default SlidingNavbar;
