import { Link } from 'react-router-dom';
import styles from '../../styles/Contact.module.css';

import goto from '../../assets/goto_arrow.png';
import instagram from '../../assets/instagram.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

import alexLogo from '../../assets/red_cloud_transparent.png';

const contacts = [
  { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/alexander-saavedra-garcia/', img: linkedin },
  { name: 'GITHUB', url: 'https://github.com/alexansaa', img: github },
  { name: 'INSTAGRAM', url: 'https://www.instagram.com/alexbysaa/', img: instagram },
];

const ContactLogic = () => {
  return (
    <div className={styles.contact_cnt}>
      <div className={`${styles.continuous_animation}`}>
        <div className={`${styles.move_left_infinite1} ${styles.moving_element1}`}>LET'S TALK - </div>
        <div className={`${styles.move_left_infinite2} ${styles.moving_element2}`}>LET'S TALK - </div>
      </div>
      <div className={styles.contact_links}>
        <ul>
          {contacts.map((cont, index) => {
            return (
              <Link to={cont.url} className={styles.contactBorder}>
                <li key={index}>
                  <div>
                    <img src={cont.img} alt={`go to ${cont.name} url`} />
                    {cont.name}
                    <img id='goto_img' src={goto} alt={`go to ${cont.name} url`} className={styles.mirror_img} />
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className={styles.footer_hiden}>
        <div className={styles.footer_left}>
          <img src={alexLogo} alt="alexLogo" />
          <p>alexan.saa@gmail.com | +(593)0988409655</p>
        </div>
        <div className={styles.footer_right}>
          <p>Alexander Web | © All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default ContactLogic;