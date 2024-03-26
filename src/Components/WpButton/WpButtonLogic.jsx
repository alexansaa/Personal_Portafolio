import style from '../../styles/WpButton.module.css';

import wpIcon from '../../assets/wp.png';

const WpButtonLogic = () => {
  const WhatsApp_Contact = () => {
    console.log("click");
  };

  return (
    <div className={style.last_wp_btn_part}>
      <button onClick={WhatsApp_Contact()} className={style.wp_btn}>
        <div className={style.wp_btn_text}>
          Happy to chat on Whatsapp
        </div>
        <div className={style.wp_btn_img}>
          <img src={wpIcon} alt='Whats App Button'></img>
        </div>
      </button>
    </div>
  )
};

export default WpButtonLogic;