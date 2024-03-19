import styles from '../../../styles/ProjectCard.module.css';

const ProjectCardLogic = ({ project, myIndex }) => {
  return (
    <div>
      <div>
        <img src={project.img} alt={project.name} />
      </div>
      <div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <ul>
          {project.technologies.map((tech) => {
            return <li>{tech}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCardLogic;