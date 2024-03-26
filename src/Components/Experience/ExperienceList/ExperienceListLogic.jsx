import { useEffect } from 'react';
import styles from '../../../styles/ExperienceList.module.css';
import ExperienceCard from "./ExperienceCardLogic";

const myExperience = [
  { name: "Multi-Card Project", description: "Information of different JSON objects gathered within an array is dynamically displayed and rendered into the web page. These elements may fulfill different requirements depending on the objective of the website. Styling may be applied depending on the client's requirements." },
  { name: "Fit All Viewport", description: "This website is able to fit the size of a wide range of viewport sizes. By making it responsible and with a good range of viewport brake points I have managed to develop a great friendly and responsive user interface that makes your application look bold and shiny." },
  { name: "LocalStorage Management", description: "The features implemented in this project have to do with data manipulation at the front end. This means storing data in the client's browser which enables us to have a web application with better performance and quicker loading times." },
  { name: "Design & Storage", description: "LocalStorage may be used in many ways, one of which is to make web apps load quickly and the application develops better." },
  { name: "Financial Life App", description: "This applications keeps track of any expenses sorte by categories. You can take controll of your financial life with ease using this application." },
  { name: "Tonic", description: "A daily selection of privately personalized reads; no accounts or sign-ups required" },
  { name: "Multi-Post Stories", description: "A daily selection of privately personalized reads; no accounts or sign-ups required" },
];

const line_wrapper = 'line_wrapper';
const line = 'line';

// falta mejorar la implementacion, para conseguir el efecto de scroll de la luz de la lista de experiencia
// en generar el codigo acutal esta bien, excepto por que las configuraciones estan mal. Sean estas de CSS o de las variables manipuladas en el codigo
// El tema es que con una de aquellas configuraciones, se logro realizar el movimiento en base al scroll pero para otro elemento y en unas dimenciones incorrectas
// hay que revisar con mas detalle para entender la implementacion y configurar correctamente los elementos y logica ya implementados
const ExperienceListLogic = () => {
  useEffect(() => {
    const experienceLineWrapper = document.getElementById(line_wrapper);
    const experienceLine = document.getElementById(line);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const lineHeight = experienceLineWrapper.offsetHeight;

      const newPosition = scrollTop / (document.documentElement.scrollHeight - window.innerHeight) * lineHeight;
      // console.log(experienceLine);

      experienceLineWrapper.style.top = `${newPosition}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [line_wrapper]);

  return (
    <>
      <div id='milestones' className={`${styles.experience_title} ${styles.font_roboto}`}>Milestones</div>
      <div className={styles.experience_cnt}>
        <div id={line_wrapper} className={styles.experience_line_wrapper}>
          <div id={line} className={styles.experience_line}>
            <div className={styles.experience_light}></div>
          </div>
        </div>
        <div className={styles.experience_list_cnt}>
          {myExperience.map((someExperience, index) => {
            return <ExperienceCard experience={someExperience} myIndex={index + 1} key={index} />
          })}
        </div>
      </div>
    </>
  );
};

export default ExperienceListLogic;