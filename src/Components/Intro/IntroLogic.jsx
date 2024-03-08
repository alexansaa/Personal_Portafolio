import styles from '../../styles/Intro.module.css';

const IntroLogic = () => {
  return (
    <div>
      <div className={`${styles.font_roboto} ${styles.rol_text}`}>
        Full Stack Developer - AI/ML Developer
      </div>
      <div className={`${styles.font_kode} ${styles.professional_text}`}>
        Technological innovation breaks patterns and immerses itself in all areas.
      </div>
      <div className={`${styles.font_kalam} ${styles.personal_text}`}>
      My mission is to design and develop technological solutions, generating value for you and your clients🤖❤️.
      </div>
    </div>
  );
};

export default IntroLogic;