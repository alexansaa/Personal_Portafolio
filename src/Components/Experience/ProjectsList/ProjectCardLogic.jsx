const ProjectCardLogic = ({ name, project }) => {
  return (
    <>
      <div>Project Name: {name}</div>
      <div>The project: {project.description}</div>
    </>
  );
};

export default ProjectCardLogic;