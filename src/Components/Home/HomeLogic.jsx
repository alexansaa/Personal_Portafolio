import style from '../../styles/Home.module.css';
import Carousel from '../Carousel/CarouselLogic';
import Intro from '../Intro/IntroLogic';
import wpIcon from '../../assets/wp.png';

import SlidingNavbar from '../SliderNav/SliderNavLogic';
import LittleAbout from '../About/LittleAboutLogic';
import LittleExperience from '../Experience/LittleExperience/LittleExperienceLogic';
import ProjectsList from '../Experience/LittleExperience/ProjectsList/ProjectsListLogic';

const HomeLogic = () => {
  const WhatsApp_Contact = () => {
    console.log("click");
  };

  const images = [
    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A6A0477DA809F962FBA9A54E53C40E66F6182B822AC8CF0AD1BCDFB8D8CBEC6A/scale?width=1200&aspectRatio=1.78&format=webp',
    'https://i.ytimg.com/vi/1aqjGm3mGpA/sddefault.jpg',
    'https://noticias.coches.com/wp-content/uploads/2020/08/coches.com_quien-es-rayo-mcqueen-cars-10.jpeg',
  ]; 

  return (
    <div className={style.home}>
      <div className={style.carousel_cnt}>
        <div className={style.carousel_part}>
          <Carousel images={images} />
        </div>
        <div className={style.carousel_part}>
          <Intro />
          <div className={style.wp_btn_cont}>
            <button onClick={WhatsApp_Contact} className={style.wp_btn}>
              <div className={style.wp_btn_text}>
                Happy to chat on Whatsapp
              </div>
              <div className={style.wp_btn_img}>
                <img src={wpIcon} alt='Whats App Button'></img>
              </div>
            </button>
          </div>
        </div>
      </div>
      <SlidingNavbar />
      <LittleAbout />
      <LittleExperience />
      <ProjectsList />
    </div>
  );
};

export default HomeLogic;