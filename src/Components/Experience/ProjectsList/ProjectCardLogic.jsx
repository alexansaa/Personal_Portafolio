import styles from '../../../styles/ProjectCard.module.css';
import rightArrow from '../../../assets/right_arrow.png';

const ProjectCardLogic = ({ project, myIndex }) => {
  return (
    <div className={styles.projectCard_cnt}>
      <div className={styles.projectCard_img_cnt}>
        <img src={project.img} alt={project.name} />
      </div>
      <div className={styles.projectCard_info_cnt}>
        <div className={styles.projectCard_info_title}>
          <h2>{project.name}</h2>
          <img src={rightArrow} alt={`go to ${project.name} project`} />
        </div>
        <div className={styles.projectCard_info_location}>
          <img src={project.location_img}></img>
          <p>{project.location}</p>
        </div>
        <div>
          <ul>
            {project.technologies.map((tech) => {
              return <li>{tech}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardLogic;