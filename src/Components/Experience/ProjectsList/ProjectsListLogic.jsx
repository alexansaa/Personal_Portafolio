import styles from '../../../styles/ProjectList.module.css';
import ProjectCard from "./ProjectCardLogic";

const myProjects = [
  { name: "Multi-Card Project", img:'', location: '', technologies: ['PostgreSQL', 'React', '.NET'], description: "Information of different JSON objects gathered within an array is dynamically displayed and rendered into the web page. These elements may fulfill different requirements depending on the objective of the website. Styling may be applied depending on the client's requirements." },
  { name: "Fit All Viewport", img:'', location: '', technologies: ['PostgreSQL', 'React', '.NET'], description: "This website is able to fit the size of a wide range of viewport sizes. By making it responsible and with a good range of viewport brake points I have managed to develop a great friendly and responsive user interface that makes your application look bold and shiny." },
  { name: "LocalStorage Management", img:'', location: '', technologies: ['PostgreSQL', 'React', '.NET'], description: "The features implemented in this project have to do with data manipulation at the front end. This means storing data in the client's browser which enables us to have a web application with better performance and quicker loading times." },
  { name: "Design & Storage", img:'', location: '', technologies: ['PostgreSQL', 'React', '.NET'], description: "LocalStorage may be used in many ways, one of which is to make web apps load quickly and the application develops better." },
  { name: "Financial Life App", img:'', location: '', technologies: ['PostgreSQL', 'React', '.NET'], description: "This applications keeps track of any expenses sorte by categories. You can take controll of your financial life with ease using this application." },
  { name: "Tonic", img:'', location: '', technologies: ['PostgreSQL', 'React', '.NET'], description: "A daily selection of privately personalized reads; no accounts or sign-ups required" },
  { name: "Multi-Post Stories", img:'', location: '', technologies: ['PostgreSQL', 'React', '.NET'], description: "A daily selection of privately personalized reads; no accounts or sign-ups required" },
];

const ProjectsListLogic = () => {
  return (
    <div className={styles.projects_cnt}>
      <div className={styles.projects_list_cnt}>
        {myProjects.map((someProject, index) => {
          return <ProjectCard project={someProject} myIndex={index + 1} key={index} />
        })}
      </div>
    </div>
  );
};

export default ProjectsListLogic;