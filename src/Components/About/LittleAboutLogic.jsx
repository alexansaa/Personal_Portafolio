import profilePhoto from '../../assets/Foto_Alex.jpg';
import style from '../../styles/LittleAbout.module.css';

const LittleAboutLogic = () => {
  return (
    <div className={style.littleAbout}>
      <div className={`${style.litAbout_item} ${style.litAbout_item_padding} ${style.litAbout_text}`}>
        <h2>
          Closing the gap between digital and real-world infrastructures.
        </h2>
        <br></br>
        <p>
          I have taken the chance to join computer science with mechanical engineering skills, looking forward to solving the needs and challenges of the near-future world.
        </p>
        <br></br>
        <p>
          Artificial intelligence is taking over information processing, showing itself as the new goal to achieve. Implementing solutions in AI/ML requires high degrees of problem understanding, requiring experts to have increasingly broader skill sets focused on the solution's nature.
        </p>
        <br></br>
        <p>
          When it comes to real-world solutions, professionals with knowledge of the involved elements and physical aspects of the solution are required, such as mechanical engineers, who know about energy systems design, behavior, and performance, or the behavior of mechanisms when triggered.
        </p>
      </div>
      <div className={`${style.litAbout_item} ${style.litAbout_item_padding}`}>
        <img src={profilePhoto} alt='Alexander Profile' className={style.userImage}></img>
      </div>
    </div>
  );
};

export default LittleAboutLogic;