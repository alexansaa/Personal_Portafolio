import styles from '../../../styles/ProjectList.module.css';
import ProjectCard from "./ProjectCardLogic";

import ec from '../../../assets/Countries/Ecuador.png';

const myProjects = [
  { name: "Hotel Reservations", repo: 'https://github.com/alexansaa/HotelFrontEnd', live: 'https://hotel-front-end.vercel.app/',img: 'https://drive.google.com/thumbnail?id=1IE9A344AhQ2XillFJ3P9M67UjYttbkzU&sz=w1000', location: 'Quito - Ecuador', location_img: ec, technologies: ['Angular', 'Python', 'MongoDB'], description: "This web app simplifies hotel management.  It automates room reservations, showcases amenities to attract guests, and accepts secure payments through PayPal - all in one user-friendly platform" },
  { name: "Client-Service App", repo:'https://github.com/alexansaa/test_businessIT_frontend', live:'https://test-business-it-frontend.vercel.app/', img: 'https://drive.google.com/thumbnail?id=14NHLPFJOvhCMrtGKVFtvqFbUTn9RNGMB&sz=w1000', location: 'Quito - Ecuador', location_img: ec, technologies: ['Angular', '.NET', 'SQL'], description: "This app tackles client chaos. It manages your company's clients, catalogs services, and unifies data from various sources into a single, clear dashboard. No more information headaches, just informed decisions." },
  { name: "3D Paint Tool", repo:'https://github.com/alexansaa/3D_PaintTool', live:'https://github.com/alexansaa/3D_PaintTool?tab=readme-ov-file#usage', img: 'https://drive.google.com/thumbnail?id=1NX_JYl4wDuaX2rYAZ-GgQoid52YFcrqg&sz=w1000', location: 'Quito - Ecuador', location_img: ec, technologies: ['C++', 'OpenGL', 'GLFW', 'GLAD'], description: "This sculpting app empowers you to create stunning 3D art. Directly manipulate shapes in a virtual space using your mouse and keyboard. Import and export existing objects for further customization." },
  { name: "Spotify Song App", repo:'https://github.com/alexansaa/SpotipySongApp', live:'https://github.com/alexansaa/SpotipySongApp/blob/main/README.md#usage', img: 'https://drive.google.com/thumbnail?id=1YKiEhGU3ZIUDy6qVCbA3aWZZpQm5DO0S&sz=w1000', location: 'Quito - Ecuador', location_img: ec, technologies: ['Spotify Web API', 'CMD', 'Python'], description: "Spotipy Console App brings Spotify exploration to your desktop. Simply type commands to search for songs and artists. Find your favorites and even preview them in your browser - all within this handy app." },
  { name: "Verano Stock Management App", repo:'https://github.com/alexansaa/Verano', live:'https://github.com/alexansaa/Verano?tab=readme-ov-file#usage', img: 'https://drive.google.com/thumbnail?id=1aM3LAy5_g4rHa-SZNgWP8aYvIES-hP6j&sz=w1000', location: 'Quito - Ecuador', location_img: ec, technologies: ['VBA Apps', 'MsExcel', 'MsAccess'], description: "This Excel add-in tracks their 11,000+ items, analyzes sales to predict production needs, and keeps everything organized - all within a familiar interface. Less stock chaos, more informed decisions." },
  { name: "Recipe App", repo:'https://github.com/alexansaa/Recipe_App', live:'https://recipe-app-uxda.onrender.com/users/sign_in', img: 'https://drive.google.com/thumbnail?id=1NjhGx-a_MO1yiKDPrM-Tdf_gyXklEXpa&sz=w1000', location: 'Quito - Ecuador', location_img: ec, technologies: ['RoR', 'Devise', 'PostgreSql'], description: "Ditch the recipe box and messy notes! This Ruby on Rails app keeps your kitchen organized.  Store recipes, track ingredients, and generate shopping lists - all in one place. Cooking just got easier!" },
  { name: "Financial Life App", repo: 'https://github.com/alexansaa/FinancialLife', live: 'https://financiallifeapp.onrender.com/', img: 'https://drive.google.com/thumbnail?id=1oxlzhHurulB5Gq_IXkL1VWsqKmJ8VaoO&sz=w1000', location: 'Quito - Ecuador', location_img: ec, technologies: ['RoR', 'Devise', 'PostgreSQL'], description: "This secure Ruby on Rails app helps you conquer financial chaos. Track income and expenses, analyze spending habits, and monitor progress towards your financial goals - all in one place." },
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