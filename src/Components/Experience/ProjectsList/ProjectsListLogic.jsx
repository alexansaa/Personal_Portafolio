import ProjectCard from "./ProjectCardLogic";

const myProjects = [
  {name: '1 proyecto', description: 'the description'},
  {name: '2 proyecto', description: 'the description'},
  {name: '3 proyecto', description: 'the description'},
  {name: '4 proyecto', description: 'the description'},
];

const ProjectsListLogic = () => {
  return (
    <>
      <div>ProjectListLogic Works!</div>
      {myProjects.map((someProject) => {
        return <ProjectCard name={someProject.name} project={someProject}/>
      })}
    </>
  );
};

export default ProjectsListLogic;