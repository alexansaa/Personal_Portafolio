import { useEffect } from 'react';
import styles from '../../../styles/ExperienceList.module.css';
import ExperienceCard from "./ExperienceCardLogic";

const myExperience = [
  { name: "EP Petroecuador", description: "Having worked in the oil industry, I gained valuable experience maintaining and operating General Electric engines crucial for transporting crude oil. I've been deeply involved in overhauling 18- and 26-cylinder engines, handling repairs, cleaning, and meticulous recalibration. This experience has enhanced my understanding and skills, emphasizing the significance of precision and excellence throughout the maintenance process." },
  { name: "Incomprensible fluid Computational Simutation", description: "My research on computational simulation of incompressible flows in circular ducts has been a major achievement in my career. I've investigated the use of internal aerodynamic elements to enhance flow efficiency under turbulent conditions. This work has deepened my understanding of fluid dynamics and led to innovative solutions for improving flow velocity in ductal systems. I look forward to sharing my findings on my personal website." },
  { name: "Transversal knowledge of industrial processes", description: "A pivotal experience in my career was serving as a commercial advisor for a company specializing in expanded polypropylene products. In this role, I connected with professionals across various industries and delved into their operational processes. From agriculture to retail, I gained insights into how industries optimize costs and resources while minimizing waste. This experience deepened my understanding of commercial operations and expanded my expertise in diverse production processes." },
  { name: "Project Management Experience and Energy System Specialization", description: "My time at a construction company was a turning point in my career. Starting as a commercial advisor, I transitioned into focusing on designing energy systems for industries, realizing its potential. This shift allowed me to develop valuable project management skills, leading teams and ensuring compliance. It broadened my horizons and strengthened my commitment to innovation in construction and engineering." },
  { name: "Software Experience and Skills", description: "Embarking on a second degree in Computer Science Engineering was a game-changer for me. It allowed me to integrate computational knowledge into my mechanical engineering background. Selling two computing projects during this period marked my entry into the field of automation. Completing the Microverse bootcamp further enhanced my skills, reinforcing my dedication to innovation and excellence in technology." },
  { name: "Digital Twin of a hand prosthesis", description: "Exploring digital twins was a key moment in my career. Developing one for a prosthetic hand during my Computer Science Engineering thesis project was particularly rewarding. This achievement reflects my dedication to using technology for societal advancement." },
  { name: "Digital Twins & Industry Applications", description: "Transitioning into sustainable energy marked a turning point in my career. Leveraging my background in mechanical engineering and computer science, I now work on implementing AI and machine learning to cut energy consumption in industrial and urban systems. Our approach, centered around digital twins, aims to optimize energy use through plant redesign and eco-friendly equipment adoption. This endeavor holds promise for a more sustainable future." },
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