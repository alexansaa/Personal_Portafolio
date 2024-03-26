import style from '../../styles/Home.module.css';
import Carousel from '../Carousel/CarouselLogic';
import Intro from '../Intro/IntroLogic';

import SlidingNavbar from '../SliderNav/SliderNavLogic';
import LittleAbout from '../About/LittleAboutLogic';
import LittleExperience from '../Experience/LittleExperience/LittleExperienceLogic';
import ProjectsList from '../Experience/ProjectsList/ProjectsListLogic';
import ExperienceList from '../Experience/ExperienceList/ExperienceListLogic';
import LittleContact from '../Contact/LittleContactLogic';
import WpButton from '../WpButton/WpButtonLogic';

const HomeLogic = () => {
  const images = [
    'https://drive.google.com/thumbnail?id=1YvbDZfSYj-nq4z7ePrIMZ20UQCinVeJe&sz=w1000',
    'https://drive.google.com/thumbnail?id=129HiTL4w8oESjXbQ0sRG2PiJ8DSV5zcI&sz=w1000',
    'https://drive.google.com/thumbnail?id=1jpT5T3BwSpD_ter4JtRBRMFXbw2PP0bY&sz=w1000',
    'https://drive.google.com/thumbnail?id=1eK52v8PaNi_fNkcTiKDBdYghHXiKZVCU&sz=w1000',
    'https://drive.google.com/thumbnail?id=1nfJ9U2HETSZqefVAcIOFgDAB_3Pq2cPc&sz=w1000',
    'https://drive.google.com/thumbnail?id=1IvlQxktF_mp8an7cwofPC6UwpsX2ST8O&sz=w1000',
    'https://drive.google.com/thumbnail?id=11cefjhsc9t6KXIJhnq2wtQhX1NWS8Zq8&sz=w1000',
    'https://drive.google.com/thumbnail?id=1U97ddD00P_aPEDvibe7qJtxeytserdMh&sz=w1000',
    'https://drive.google.com/thumbnail?id=11jBihK56LK7P25IpZDYXtJ6mCXVx2vX_&sz=w1000',
    'https://drive.google.com/thumbnail?id=1g0CaJd2khxztnQF8iq2DI6KmBulbrpYM&sz=w1000',
  ];

  return (
    <div className={style.home}>
      <div className={style.carousel_cnt}>
        <div className={style.carousel_part}>
          <Carousel images={images} />
        </div>
        <div className={style.carousel_part}>
          <Intro />
          <WpButton />
        </div>
      </div>
      <SlidingNavbar />
      <LittleAbout />
      <LittleExperience />
      <ExperienceList />
      <ProjectsList />
      <WpButton />
      <div className={style.place_back}>
        <LittleContact />
      </div>
    </div>
  );
};

export default HomeLogic;