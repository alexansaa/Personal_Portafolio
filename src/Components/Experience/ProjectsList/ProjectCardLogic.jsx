import styles from '../../../styles/ProjectCard.module.css';

const ProjectCardLogic = ({ project, myIndex }) => {
  return (
    <div>
      <div className={styles.projectCard_cnt}>
        <div className={styles.projectCard_number}>{myIndex}</div>
        <div className={styles.projectCard_description}>
          <div>Project: {project.name}</div>
          <div>{project.description}</div>
        </div>
      </div>
      <hr className={styles.project_separation_line}></hr>
    </div>
  );
};

export default ProjectCardLogic;