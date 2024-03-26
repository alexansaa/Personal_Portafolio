import { Link } from 'react-router-dom';
import style from '../../styles/PortfolioIntro.module.css';

const PortfolioIntroLogic = () => {
  const resume_url = 'https://drive.google.com/uc?export=download&id=1vVcrrTw93Z1l77RdZBS4ply7PGb3Zmwu';
  
  return (
    <div className={style.portfolio_letter}>
      <div className={`${style.portfolioIntro_title} ${style.font_roboto}`}>
        Proffesional Experience
      </div>
      <div className={style.portfolioIntro_cnt}>
        <div className={style.portfolioIntro_elmnt}>
          Aqui estaria la descripcion increible y emocionante sobre la experiencia que quiero plasmar cuando el cliente vea el apartado de portafolio.
        </div>
        <div className={style.portfolioIntro_elmnt}>
          <div>
            Aqui pondria un texto extra para amagar que no tengo idea de que mas poner, porque estoy disenando primero la pagina web. para luego poner el boton que se baje mi cv
          </div>
          <div>
            <Link to={resume_url}>
              <button>Download Kleber Resume!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PortfolioIntroLogic;