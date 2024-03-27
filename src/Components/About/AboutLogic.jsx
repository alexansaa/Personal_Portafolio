import style from '../../styles/About.module.css';

import Footer from '../Footer/FooterLogic';
import LittleExperience from '../Experience/LittleExperience/LittleExperienceLogic'

const AboutLogic = () => {
  return (
    <div className={style.about_spacing}>
      <div>
        <div className={`${style.about_title} ${style.font_roboto}`}>
          How is Kleber Saaavedra?
        </div>
        <div className={`${style.about_intro_cnt} ${style.font_kode}`}>
          <div className={style.about_summary_element}>
            Witnessing the transformative power of technology from a young age, I pursued a career that merges my passion for innovation with a practical understanding of various industries. My academic foundation lies in Mechanical Engineering (Escuela Politecnica Nacional, 2021+), but my interests led me to explore the world of computer science.

            My professional journey began as a sales consultant for a company manufacturing versatile polypropylene products. This role exposed me to a wide range of industrial processes, sparking my interest in the intricate relationship between automation, technology, and efficient workflows.  This experience also solidified my understanding of how diverse industries operate.

            Later, I transitioned into the construction sector, where I honed my project management and client communication skills at a company specializing in both industrial and commercial building projects. Witnessing the company's commitment to analyzing mechanical systems within construction projects further broadened my technical perspective.  Unfortunately, unforeseen economic challenges in Ecuador impacted my entrepreneurial aspirations during this period.
          </div>
          <div className={style.about_summary_element}>
            Despite these setbacks, I persevered and found a niche in the third company I joined. While pursuing my computer science studies, I worked for a firm selling industrial and automotive lubricants. This role not only offered valuable experience in business development, but also highlighted the importance of strong client relationships and well-defined contracts in achieving successful business outcomes.

            Today, I leverage my multi-faceted background to create comprehensive solutions for clients encompassing both industrial and technological aspects.  My ability to successfully implement information exchange systems at the office level, coupled with leading industrial automation projects, demonstrates my adaptability and expertise in diverse environments.  Most notably, co-founding a company that utilizes artificial intelligence for energy cost reduction allowed me to make a tangible impact in the energy sector.

            As I look towards the future, I'm committed to leveraging my diverse skillset to continue growing my company and providing innovative solutions that empower businesses.
          </div>
        </div>
      </div>
      <LittleExperience />
      <Footer />
    </div>
  );
};

export default AboutLogic;