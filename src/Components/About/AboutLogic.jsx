import style from '../../styles/About.module.css';

import Footer from '../Footer/FooterLogic';
import LittleAbout from '../About/LittleAboutLogic';
import LittleExperience from '../Experience/LittleExperience/LittleExperienceLogic'

const AboutLogic = () => {
  return (
    <div className={style.about_spacing}>
      <div>
        <div className={`${style.about_title} ${style.font_roboto}`}>
          Who is Kleber Saavedra?
        </div>
        <div className={`${style.about_intro_cnt} ${style.font_kode}`}>
          <div className={style.about_summary_element}>
            I am Kleber Saavedra, a passionate and committed professional with a strong track record in innovation, sustainability, and excellence in the field of engineering and technology. Throughout my diverse career, I have had the privilege of participating in a wide range of projects in areas as diverse as mechanical engineering, computer science, and sustainable energy.
            <br />
            <br />
            From my early days working in the oil industry, where I had the opportunity to immerse myself in the intricate processes of marine engine maintenance, to my current work in the exciting world of digital twins and artificial intelligence applied to energy optimization, every step of my career has been an opportunity to learn, grow, and make a meaningful difference.
            <br />
            <br />
            My experience in computational simulation research of non-compressible flows in circular ducts, as well as in the design and development of digital twins for hand prostheses in collaboration with the Allan Turing Vision and Artificial Intelligence Laboratory, has demonstrated my ability to tackle complex challenges and find innovative solutions.
          </div>
          <div className={style.about_summary_element}>
            In addition, my involvement in projects related to the automation and control of energy systems in industries and urban environments has reinforced my commitment to sustainability and environmental care. Implementing cutting-edge technologies, such as artificial intelligence and machine learning, to reduce energy consumption and minimize carbon footprint, is one of my passions and a goal that drives me in every project I get involved in.
            <br />
            <br />
            If you are looking for a committed, creative, and results-oriented collaborator for your projects, you have come to the right place. I am excited to offer my skills, experience, and dedication to help you achieve your goals and make the world a better place through innovation and technology.
            <br />
            <br />
            I look forward to collaborating with you and taking our projects to the next level together!
          </div>
        </div>
      </div>
      <LittleAbout />
      <LittleExperience />
      <Footer />
    </div>
  );
};

export default AboutLogic;