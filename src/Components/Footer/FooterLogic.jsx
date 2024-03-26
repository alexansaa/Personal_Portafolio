import alexLogo from '../../assets/red_cloud_transparent.png';

import styles from '../../styles/Footer.module.css';

const FooterLogic = () => {
  return (
    <div className={styles.footer_hiden}>
      <div className={styles.footer_left}>
        <img src={alexLogo} alt="alexLogo" />
        <p>alexan.saa@gmail.com | +(593)0988409655</p>
      </div>
      <div className={styles.footer_right}>
        <p>Alexander Web | © All Rights Reserved</p>
      </div>
    </div>
  )
};

export default FooterLogic;