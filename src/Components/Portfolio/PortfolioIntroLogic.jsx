import { Link } from 'react-router-dom';
import style from '../../styles/PortfolioIntro.module.css';

const PortfolioIntroLogic = () => {
  const resume_url = 'https://drive.google.com/uc?export=download&id=1vVcrrTw93Z1l77RdZBS4ply7PGb3Zmwu';

  return (
    <div className={`${style.portfolio_letter} ${style.portfolio_spacing}`}>
      <div className={`${style.portfolioIntro_title} ${style.font_roboto}`}>
        Making a Difference
      </div>
      <div className={style.portfolioIntro_cnt}>
        <div className={`${style.portfolioIntro_elmnt} ${style.font_kode}`}>
          Welcome to my project gallery, where you can discover a sample of my work and my dedication in the field of engineering, technology and sustainability. Each project represents a unique challenge, an opportunity to innovate and make a significant difference in the world around us.
          <br />
          <br />
          From my pioneering research in computational simulation of non-compressible flows in circular ducts, to the design and development of digital twins for hand prostheses in collaboration with the Allan Turing Vision and Artificial Intelligence Laboratory, each project reflects my commitment to excellence and creativity.
          <br />
          <br />
          Discover how I implemented artificial intelligence and machine learning to reduce energy consumption in industrial and urban systems, or how I participated in the maintenance and optimization process of General Electric marine engines in the oil industry. Each project is a success story, a testament to my ability to face complex challenges and find innovative solutions.
        </div>
        <div className={`${style.portfolioIntro_elmnt} ${style.font_kode}`}>
          <div>
            Interested in learning more about my projects and my experience? Download my resume and find out how I can contribute to your projects and goals!
            <br />
            <br />
            I am confident that my skills and experience would be a valuable asset to your team. I am a hard worker and I am always willing to go the extra mile. I am also a team player and I am always willing to share my knowledge and expertise with others.
            <br />
            <br />
            I am eager to learn more about your company and your projects. I am confident that I can make a significant contribution to your team and help you achieve your goals.
            <br />
            <br />
            Thank you for your time and consideration. I look forward to hearing from you soon.
          </div>
          <Link to={resume_url} className={style.portfolio_resume_btn_dwnld}>
            <span className={style.portfolio_name_resume}>Download Kleber Resume!</span><span className={style.portfolio_goto_resume_arrow}>&#11181;</span>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default PortfolioIntroLogic;