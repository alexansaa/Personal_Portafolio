import styles from '../../../styles/ProjectList.module.css';
import ProjectCard from "./ProjectCardLogic";

import ec from '../../../assets/Countries/Ecuador.png';

const myProjects = [
  { name: "Hotel Reservations", repo: 'https://github.com/alexansaa/HotelFrontEnd', live: 'https://hotel-front-end.vercel.app/',img: 'https://drive.google.com/thumbnail?id=1IE9A344AhQ2XillFJ3P9M67UjYttbkzU&sz=w1000', location: 'Quito - Ecuador', location_img: ec, technologies: ['Angular', 'Python', 'MongoDB'], description: "The Hotel Reservations Web App provides a professional user interface for showcasing and promoting a hotel, while managing rooms reservations automatic process. This web application is meant to show hotel activities and features for clients, and tourists." },
  { name: "Client-Service App", repo:'https://github.com/alexansaa/test_businessIT_frontend', live:'https://test-business-it-frontend.vercel.app/', img: 'https://drive.google.com/thumbnail?id=14NHLPFJOvhCMrtGKVFtvqFbUTn9RNGMB&sz=w1000', location: 'Quito - Ecuador', location_img: ec, technologies: ['Angular', '.NET', 'SQL'], description: "The Client Service Registry App keeps track of company clients working with your organization, as well as the different services your organization can offer to the world! This awesome application is used to keep track of information generated from other endpoints of your infrastructure to summarize and display the collected data on one fully managed dashboard." },
  { name: "LocalStorage Management", img: 'https://noticias.coches.com/wp-content/uploads/2020/08/coches.com_quien-es-rayo-mcqueen-cars-10.jpeg', location: 'Quito - Ecuador', location_img: ec, technologies: ['PostgreSQL', 'React', '.NET'], description: "The features implemented in this project have to do with data manipulation at the front end. This means storing data in the client's browser which enables us to have a web application with better performance and quicker loading times." },
  { name: "Design & Storage", img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A6A0477DA809F962FBA9A54E53C40E66F6182B822AC8CF0AD1BCDFB8D8CBEC6A/scale?width=1200&aspectRatio=1.78&format=webp', location: 'Quito - Ecuador', location_img: ec, technologies: ['PostgreSQL', 'React', '.NET'], description: "LocalStorage may be used in many ways, one of which is to make web apps load quickly and the application develops better." },
  { name: "Financial Life App", img: 'https://i.ytimg.com/vi/1aqjGm3mGpA/sddefault.jpg', location: 'Quito - Ecuador', location_img: ec, technologies: ['PostgreSQL', 'React', '.NET'], description: "This applications keeps track of any expenses sorte by categories. You can take controll of your financial life with ease using this application." },
  { name: "Tonic", img: 'https://noticias.coches.com/wp-content/uploads/2020/08/coches.com_quien-es-rayo-mcqueen-cars-10.jpeg', location: 'Quito - Ecuador', location_img: ec, technologies: ['PostgreSQL', 'React', '.NET'], description: "A daily selection of privately personalized reads; no accounts or sign-ups required" },
  { name: "Multi-Post Stories", img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A6A0477DA809F962FBA9A54E53C40E66F6182B822AC8CF0AD1BCDFB8D8CBEC6A/scale?width=1200&aspectRatio=1.78&format=webp', location: 'Quito - Ecuador', location_img: ec, technologies: ['PostgreSQL', 'React', '.NET'], description: "A daily selection of privately personalized reads; no accounts or sign-ups required" },
];

const ProjectsListLogic = () => {
  return (
    <div id='recentWork' className={styles.project_expo}>
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