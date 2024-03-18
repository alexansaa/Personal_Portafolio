import { useEffect, useState } from 'react';
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
              <li><a href="#">Exp 1</a></li>
              <hr className={styles.horizontalLine}></hr>
              <li><a href="#">Exp 2</a></li>
              <hr className={styles.horizontalLine}></hr>
              <li><a href="#">Exp 3</a></li>
            </ul>
          </nav>
        )}
      </div>
      <div id={sliderStatic} className={`${isVisible ? styles.sliderCnt_invisible : styles.sliderCnt}`}>
        {(
          <nav className={`${styles.sliderNav}`}>
            <ul>
              <li><a href="#">Exp 1</a></li>
              <hr className={styles.horizontalLine}></hr>
              <li><a href="#">Exp 2</a></li>
              <hr className={styles.horizontalLine}></hr>
              <li><a href="#">Exp 3</a></li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}

export default SlidingNavbar;
