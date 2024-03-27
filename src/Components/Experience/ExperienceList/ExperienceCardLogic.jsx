import styles from '../../../styles/ExperienceCard.module.css';

const ExperienceCardLogic = ({ experience, myIndex }) => {
  return (
    <div>
      <div className={styles.experienceCard_cnt}>
        <div className={styles.experienceCard_number}>{myIndex}</div>
        <div className={styles.experienceCard_description}>
          <div>Experience: {experience.name}</div>
          <div className={styles.experienceCardDesc}>{experience.description}</div>
        </div>
      </div>
      <hr className={styles.experience_separation_line}></hr>
    </div>
  );
};

export default ExperienceCardLogic;