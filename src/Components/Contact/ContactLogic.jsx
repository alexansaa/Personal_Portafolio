import styles from '../../styles/Contact.module.css';
import goto from '../../assets/goto_arrow.png';

const contacts = [
  { name: 'LINKEDIN', url: '', img: '' },
  { name: 'GITHUB', url: '', img: '' },
  { name: 'INSTAGRAM', url: '', img: '' },
  { name: 'INSTAGRAM', url: '', img: '' },
];

const ContactLogic = () => {
  return (
    <div className={styles.contact_cnt}>
      <div className={`${styles.continuous_animation}`}>
        <div className={`${styles.move_left_infinite1} ${styles.moving_element1}`}>LET'S TALK - </div>
        <div className={`${styles.move_left_infinite2} ${styles.moving_element2}`}>LET'S TALK - </div>
      </div>
      <div>
        <ul>
          {contacts.map((cont, index) => {
            return (
              <li key={index}>
                <a>
                  <img src={cont.img} alt={`go to ${cont.name} url`} />
                  {cont.name}
                  <img src={goto} alt={`go to ${cont.name} url`} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ContactLogic;