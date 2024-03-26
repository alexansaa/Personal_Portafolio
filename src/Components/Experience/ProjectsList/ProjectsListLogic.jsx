import styles from '../../../styles/ProjectList.module.css';
import ProjectCard from "./ProjectCardLogic";

import ec from '../../../assets/Countries/Ecuador.png';

const myProjects = [
  { name: "Hotel Reservations", repo: 'https://github.com/alexansaa/HotelFrontEnd', live: 'https://hotel-front-end.vercel.app/',img: 'https://drive.google.com/thumbnail?id=1IE9A344AhQ2XillFJ3P9M67UjYttbkzU&sz=w1000', location: 'Quito - Ecuador', location_img: ec, technologies: ['Angular', 'Python', 'MongoDB'], description: "The Hotel Reservations Web App provides a professional user interface for showcasing and promoting a hotel, while managing rooms reservations automatic process. This web application is meant to show hotel activities and features for clients, and tourists." },
  { name: "Client-Service App", repo:'https://github.com/alexansaa/test_businessIT_frontend', live:'https://test-business-it-frontend.vercel.app/', img: 'https://drive.google.com/thumbnail?id=14NHLPFJOvhCMrtGKVFtvqFbUTn9RNGMB&sz=w1000', location: 'Quito - Ecuador', location_img: ec, technologies: ['Angular', '.NET', 'SQL'], description: "The Client Service Registry App keeps track of company clients working with your organization, as well as the different services your organization can offer to the world! This awesome application is used to keep track of information generated from other endpoints of your infrastructure to summarize and display the collected data on one fully managed dashboard." },
  { name: "3D Paint Tool", repo:'https://github.com/alexansaa/3D_PaintTool', live:'https://github.com/alexansaa/3D_PaintTool?tab=readme-ov-file#usage', img: 'https://drive.google.com/thumbnail?id=1NX_JYl4wDuaX2rYAZ-GgQoid52YFcrqg&sz=w1000', location: 'Quito - Ecuador', location_img: ec, technologies: ['C++', 'OpenGL', 'GLFW', 'GLAD'], description: "With the 3D_PaintTool app, you can draw 3D figures in space. Use your mouse and the arrow keys to move around the space of the app. Click around to create new shapes. Edit their colors and forms to create even better 3D figures. You can import and export other objects into the space too!" },
  { name: "Spotify Song App", repo:'https://github.com/alexansaa/SpotipySongApp', live:'https://github.com/alexansaa/SpotipySongApp/blob/main/README.md#usage', img: 'https://drive.google.com/thumbnail?id=1YKiEhGU3ZIUDy6qVCbA3aWZZpQm5DO0S&sz=w1000', location: 'Quito - Ecuador', location_img: ec, technologies: ['Spotify Web API', 'CMD', 'Python'], description: "The Spotipy Consol App is a desktop command line app that lets the user sign in to Spotify System, and browse through songs by artist name, albums, and songs, using the Spotipy API. The app can get the users' preferred songs and also plays a fragment of some tracks on the default local environment web browser." },
  { name: "Verano Stock Management App", repo:'https://github.com/alexansaa/Verano', live:'https://github.com/alexansaa/Verano?tab=readme-ov-file#usage', img: 'https://drive.google.com/thumbnail?id=1aM3LAy5_g4rHa-SZNgWP8aYvIES-hP6j&sz=w1000', location: 'Quito - Ecuador', location_img: ec, technologies: ['VBA Apps', 'MsExcel', 'MsAccess'], description: "The Verano Stock Management app keeps track of all 11.000+ clothing items. This application is used to compare sales against stock to create production plans for the company. This application uses Microsoft Software like MSAccess and MSExcel. Indeed, this is a plugin for Excel that creates a feature expandible module that integrates database, classes, and view arranging the code in a MVC development paradigm framework." },
  { name: "Recipe App", repo:'https://github.com/alexansaa/Recipe_App', live:'https://recipe-app-uxda.onrender.com/users/sign_in', img: 'https://drive.google.com/thumbnail?id=1NjhGx-a_MO1yiKDPrM-Tdf_gyXklEXpa&sz=w1000', location: 'Quito - Ecuador', location_img: ec, technologies: ['RoR', 'Devise', 'PostgreSql'], description: "The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Built with Ruby on Rails." },
  { name: "Financial Life App", repo: 'https://github.com/alexansaa/FinancialLife', live: 'https://financiallifeapp.onrender.com/', img: 'https://drive.google.com/thumbnail?id=1oxlzhHurulB5Gq_IXkL1VWsqKmJ8VaoO&sz=w1000', location: 'Quito - Ecuador', location_img: ec, technologies: ['RoR', 'Devise', 'PostgreSQL'], description: "The Financial Life app helps you stay organized with your economic freedom. You may need to sign in to the application to access your data and profile. The application will let you check different spences and incomes in different areas of your life!" },
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