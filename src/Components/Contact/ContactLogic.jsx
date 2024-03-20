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
    <div>
      <div>
        LET'S TALK -
      </div>
      <div>
        <ul>
          {contacts.map((cont) => {
            return (
              <li>
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