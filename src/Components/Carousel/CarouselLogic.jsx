import React, { useState } from 'react';
import styles from '../../styles/Carousel.module.css';
import back_arrow from '../../assets/back_arrow.png';
import next_arrow from '../../assets/next_arrow.png';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <img src={back_arrow} alt='back button' onClick={prevSlide} className={styles.circularButton}></img>
      
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
      />

      <img src={next_arrow} alt='next button' onClick={nextSlide} className={styles.circularButton}></img>
    </div>
  );
};

export default Carousel;