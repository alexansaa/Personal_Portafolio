import { Link } from 'react-router-dom';
import styles from '../../styles/Contact.module.css';

import Footer from '../Footer/FooterLogic';

import goto from '../../assets/goto_arrow.png';
import instagram from '../../assets/instagram.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import WpButton from '../WpButton/WpButtonLogic';


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
      <div className={styles.contact_data_cnt}>
        <div className={styles.contact_data_cnt_form_cnt}>
          <form action='https://formsubmit.co/alexan.saa@gmail.com' method='POST' className={`${styles.contact_data_cnt_form} ${styles.font_mono}`}>
            <label for="name">Name:</label>
            <input type='text' name='name' placeholder='Jhon Doe' required></input>

            <label for="email">Email:</label>
            <input type='email' name='email' placeholder='jhond@example.com' required></input>

            <label for="message">Message:</label>
            <textarea type='text' rows="4" name='message' placeholder='Type in your message...' required></textarea>

            <button type='submit'>Send</button>
          </form>
        </div>
        <div>
          <div className={styles.contact_links}>
            <ul>
              {contacts.map((cont, index) => {
                return (
                  <Link key={index} to={cont.url} target='_blank' className={styles.contactBorder}>
                    <li>
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
          <div className={styles.button_ctn}>
            <WpButton />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactLogic;