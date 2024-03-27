import { useEffect } from 'react';
import styles from '../../../styles/ExperienceList.module.css';
import ExperienceCard from "./ExperienceCardLogic";

const myExperience = [
  { name: "EP Petroecuador", description: "With firsthand experience in the heart of the oil industry, I have had the privilege of delving into the intricate maintenance and operation of General Electric engines, essential for the efficient transportation of crude oil along pumping lines. My involvement in the overhaul process of 18- and 26-cylinder engines has been fundamental, encompassing everything from repair and cleaning to the meticulous recalibration of each component. This immersion in the maintenance of critical equipment has enriched my understanding and skills in the field, highlighting the importance of precision and excellence at every step of the process." },
  { name: "Incomprensible fluid Computational Simutation", description: "My research on computational simulation of incompressible flows in circular ducts has been a significant milestone in my professional career. Through this project, I've explored the application of internal aerodynamic elements, such as fins or static vanes, to optimize flow under turbulent conditions. This research has not only expanded my understanding of fluid dynamics, but also allowed me to develop innovative solutions to improve the efficiency and velocity of flow in ductal systems. I'm excited to share the knowledge and discoveries gained during this process on my personal website." },
  { name: "Transversal knowledge of industrial processes", description: "A transformative experience in my professional career was my role as a commercial advisor for a company that manufactured and marketed products based on expanded polypropylene, an exceptionally versatile material. During this period, I had the invaluable opportunity to connect with diverse professionals from different industries, and even more significantly, to immerse myself in the intricate operational processes that characterize each one. From livestock and agriculture to manufacturing, construction, and retail, I explored a diverse range of sectors. This time was crucial for me, as it allowed me to holistically understand how industries orchestrate their operations in harmony with people to optimize costs and maximize the efficient use of resources while avoiding waste. Additionally, I gained in-depth knowledge of the varied production processes that can arise in a wide range of industries, thus consolidating my perspective and expertise in the commercial and operational arena." },
  { name: "Project Management Experience and Energy System Specialization", description: "My experience at a construction company was a significant milestone in my professional career. I started as a commercial advisor, responsible for finding new projects for the company. However, during this process, I discovered an even more promising niche: the design of energy systems for the industry. I recognized the crucial importance of this field and set out to find eco-efficient solutions for industrial energy systems. This epiphany led me to establish key contacts in the field of industrial energy, who inspired me to take on this new path. Additionally, this experience gave me valuable lessons in project management, as I participated as a stakeholder in several projects that I personally secured. This responsibility allowed me to interact directly with clients and lead the engineering design team, supervising activities, deadlines, requirements, and ensuring compliance with legal regulations. This milestone not only broadened my professional horizons but also consolidated my passion for innovation and efficiency in the field of construction and engineering." },
  { name: "Software Experience and Skills", description: "A turning point in my career was the decision to embark on a second degree. Despite having graduated as a mechanical engineer, I realized over time and with experience the value that I could bring to my projects, clients, and solutions by integrating computational knowledge. For this reason, I decided to study Computer Science Engineering to complement my initial training. During this period, I was able to sell two computing projects to companies interested in automating processes, each valued at $3000, thus marking my first steps in this new field. Over time, computer and computing projects gained relevance and complexity, challenges that I faced with the knowledge acquired during this stage. A key milestone was my participation in the Microverse bootcamp, where I honed my skills as a software professional and acquired the necessary tools to tackle a wide range of technologies and solutions. This experience not only broadened my skill set, but also consolidated my commitment to innovation and excellence in the technological field, thus strengthening my ability to offer cutting-edge solutions to my clients and projects." },
  { name: "Digital Twin of a hand prosthesis", description: "Exploring the fascinating world of digital twins was a defining milestone in my professional career. This concept, which represents the computational simulation of the behavior of real objects, captivated me from the beginning for its potential to model processes in a way that is close to reality. My interest in this area culminated in my thesis project for my degree in Computer Science Engineering, where I set out to develop a digital twin for a prosthetic hand in collaboration with the Allan Turing Laboratory of Vision and Artificial Intelligence. In this project, I not only participated in the mechanical design of the prosthesis, but also contributed to the development of the digital twin, an invaluable tool used to train artificial intelligence models. These models, in turn, are used to control the actuators of the prosthetic hand, thus allowing the user to achieve the desired movements with precision and naturalness. This achievement not only represents a milestone in my career, but also a continuous commitment to technological innovation and the practical application of computer science for the benefit of society." },
  { name: "Digital Twins & Industry Applications", description: "My entry into the field of sustainable energy marks a crucial milestone in my career, backed by a background in mechanical engineering, computer science, and the development of digital twins for innovative applications. In collaboration with a team of outstanding professionals, I embarked on the challenging goal of implementing artificial intelligence and machine learning to reduce energy consumption in industrial and urban systems. I recognize that digital twins play a fundamental role in this initiative, by accurately simulating industrial and urban processes, and by enabling the training of computational models to optimize energy use. Our approach focuses on redesigning plants, adopting eco-efficient equipment, and mitigating the carbon footprint. We are convinced that these actions will have a significant impact on the future of production, automation, and global well-being, laying the foundations for a more sustainable and prosperous world for future generations." },
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