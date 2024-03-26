import style from '../../styles/About.module.css';

import Footer from '../Footer/FooterLogic';

const AboutLogic = () => {
  return (
    <div className={style.bg_color}>
      This is my about page!
      <Footer />
    </div>
  );
};

export default AboutLogic;