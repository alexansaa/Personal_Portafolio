import style from '../../styles/Home.module.css';
import Carousel from '../Carousel/CarouselLogic';
import Intro from '../Intro/IntroLogic';

const HomeLogic = () => {
  const images = [
    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A6A0477DA809F962FBA9A54E53C40E66F6182B822AC8CF0AD1BCDFB8D8CBEC6A/scale?width=1200&aspectRatio=1.78&format=webp',
    'https://i.ytimg.com/vi/1aqjGm3mGpA/sddefault.jpg',
    'https://noticias.coches.com/wp-content/uploads/2020/08/coches.com_quien-es-rayo-mcqueen-cars-10.jpeg',
  ];
  return(
    <div className={style.bg_home}>
      <div>
        <Carousel images={images} />
      </div>
      <div>
        <Intro />
      </div>
    </div>
  );
};

export default HomeLogic;