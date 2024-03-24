import { Link } from 'react-router-dom';
import styles from '../../../styles/ProjectCard.module.css';
import rightArrow from '../../../assets/right_arrow.png';

const ProjectCardLogic = ({ project, myIndex }) => {
  return (
    <div className={styles.projectCard_cnt}>
      <div className={styles.projectCard_img_cnt}>
        <img src={project.img} alt={project.name} />
      </div>

      <Link className={styles.projectCard_info_cnt} to={project.live}>
        <div className={styles.projectCard_info_title}>
          <h2>{project.name}</h2>
          <img src={rightArrow} alt={`go to ${project.name} project`} />
        </div>
        <div className={styles.projectCard_info_location}>
          <img src={project.location_img}></img>
          <p>{project.location}</p>
        </div>
        <div className={styles.project_meta_data}>
          <div>
            <ul>
              {project.technologies.map((tech, index) => {
                return <li key={index}>{tech}</li>
              })}
            </ul>
          </div>
          <Link className={styles.project_meta_data_repo} to={project.repo}>
            Go To Repo! &#11016;
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCardLogic;