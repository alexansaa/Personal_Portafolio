import styles from '../../styles/Portfolio.module.css';
import Footer from '../Footer/FooterLogic';
import ProjectsList from '../Experience/ProjectsList/ProjectsListLogic';
import PortfolioIntro from './PortfolioIntroLogic';
import ExperienceList from '../Experience/ExperienceList/ExperienceListLogic';

const PortfolioLogic = () => {
  return(
    <div className={`${styles.portfolioSpace} ${styles.porfolioBg}`}>
      <PortfolioIntro />
      <ProjectsList />
      <ExperienceList />
      <Footer />
    </div>
  );
};

export default PortfolioLogic;