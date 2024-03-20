import styles from '../../../styles/ProjectList.module.css';
import ProjectCard from "./ProjectCardLogic";

import ec from '../../../assets/Countries/Ecuador.png';

const myProjects = [
  { name: "Multi-Card Project", img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A6A0477DA809F962FBA9A54E53C40E66F6182B822AC8CF0AD1BCDFB8D8CBEC6A/scale?width=1200&aspectRatio=1.78&format=webp', location: 'Quito - Ecuador', location_img: ec, technologies: ['PostgreSQL', 'React', '.NET'], description: "Information of different JSON objects gathered within an array is dynamically displayed and rendered into the web page. These elements may fulfill different requirements depending on the objective of the website. Styling may be applied depending on the client's requirements." },
  { name: "Fit All Viewport", img: 'https://i.ytimg.com/vi/1aqjGm3mGpA/sddefault.jpg', location: 'Quito - Ecuador', location_img: ec, technologies: ['PostgreSQL', 'React', '.NET'], description: "This website is able to fit the size of a wide range of viewport sizes. By making it responsible and with a good range of viewport brake points I have managed to develop a great friendly and responsive user interface that makes your application look bold and shiny." },
  { name: "LocalStorage Management", img: 'https://noticias.coches.com/wp-content/uploads/2020/08/coches.com_quien-es-rayo-mcqueen-cars-10.jpeg', location: 'Quito - Ecuador', location_img: ec, technologies: ['PostgreSQL', 'React', '.NET'], description: "The features implemented in this project have to do with data manipulation at the front end. This means storing data in the client's browser which enables us to have a web application with better performance and quicker loading times." },
  { name: "Design & Storage", img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A6A0477DA809F962FBA9A54E53C40E66F6182B822AC8CF0AD1BCDFB8D8CBEC6A/scale?width=1200&aspectRatio=1.78&format=webp', location: 'Quito - Ecuador', location_img: ec, technologies: ['PostgreSQL', 'React', '.NET'], description: "LocalStorage may be used in many ways, one of which is to make web apps load quickly and the application develops better." },
  { name: "Financial Life App", img: 'https://i.ytimg.com/vi/1aqjGm3mGpA/sddefault.jpg', location: 'Quito - Ecuador', location_img: ec, technologies: ['PostgreSQL', 'React', '.NET'], description: "This applications keeps track of any expenses sorte by categories. You can take controll of your financial life with ease using this application." },
  { name: "Tonic", img: 'https://noticias.coches.com/wp-content/uploads/2020/08/coches.com_quien-es-rayo-mcqueen-cars-10.jpeg', location: 'Quito - Ecuador', location_img: ec, technologies: ['PostgreSQL', 'React', '.NET'], description: "A daily selection of privately personalized reads; no accounts or sign-ups required" },
  { name: "Multi-Post Stories", img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A6A0477DA809F962FBA9A54E53C40E66F6182B822AC8CF0AD1BCDFB8D8CBEC6A/scale?width=1200&aspectRatio=1.78&format=webp', location: 'Quito - Ecuador', location_img: ec, technologies: ['PostgreSQL', 'React', '.NET'], description: "A daily selection of privately personalized reads; no accounts or sign-ups required" },
];

const ProjectsListLogic = () => {
  return (
    <div className={styles.project_expo}>
      <div className={styles.projectTitle}>Recent Work!</div>
      <div className={styles.projects_cnt}>
        <div className={styles.projects_list_cnt}>
          {myProjects.map((someProject, index) => {
            return <ProjectCard project={someProject} myIndex={index + 1} key={index} />
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsListLogic;