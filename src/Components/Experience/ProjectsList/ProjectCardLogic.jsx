import { Link } from 'react-router-dom';
import styles from '../../../styles/ProjectCard.module.css';
import rightArrow from '../../../assets/right_arrow.png';

const ProjectCardLogic = ({ project, myIndex }) => {
  return (
    <div className={styles.projectCard_cnt}>
      <Link className={styles.projectCard_img_cnt} to={project.live}>
        <img src={project.img} alt={project.name} />
      </Link>

      <Link className={styles.projectCard_info_cnt} to={project.live}>
        <div className={styles.projectCard_info_title}>
          <h2>{project.name}</h2>
          <img src={rightArrow} alt={`go to ${project.name} project`} />
        </div>
        <div className={styles.projectCard_info_description}>
          {project.description}
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
          <button className={styles.project_meta_data_repo} to={project.repo}>
            Go To Repo! &#11016;
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCardLogic;