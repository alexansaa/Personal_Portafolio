import style from '../../styles/LittleExperience.module.css';
import cloudRed from '../../assets/red_cloud_transparent.png';

// elementos inner circle
import aws from '../../assets/inner circle/AWS.png';
import csharp from '../../assets/outer circle/CSharp.png';
import agile from '../../assets/space/agile.png';

const LittleExperienceLogic = () => {
  return (
    <div className={style.out_overflow}>
      <div className={`${style.littleExperience_title} ${style.font_roboto}`}>
        Taking information to a whole new real-world interconnection level.
      </div>
      <div className={style.bg_light}>
        {/* title */}
        <div className={style.littleExperience_fancyShow}>

        </div>

        {/* outer circle */}
        <div className={style.dashed_circle_outer}>
          {/* circle */}
        </div>

        {/* inner circle */}
        <div className={style.dashed_circle_inner}>
          {/* circle */}
        </div>

        {/* center image */}
        <div className={style.fancyShow_img_cnt}>
          <img src={cloudRed} alt='Kleber Saavedra - Smart Cloud'></img>
        </div>

        {/* elementos inner circle */}
        <div className={`${style.fancyElement} ${style.fancyElement_innerRotation}`}>
          <img src={aws} alt='AWS - amazon web services' className={`${style.fancyElement_selfAntiClockRotation}`}/>
        </div>

        {/* elementos outer circle */}
        <div className={`${style.fancyElement} ${style.fancyElement_outerRotation}`}>
          <img src={csharp} alt='c sharp technology' className={`${style.fancyElement_selfClockRotation}`}/>
        </div>

        {/* elementos de espacio */}
        <div className={`${style.spaceElement} ${style.font_roboto} ${style.lilExp_bold} ${style.space_rotation_anticlock_left}`}>
          <img src={agile} alt='agile methodology' /> Scrum
        </div>
      </div>
    </div>
  )
};

export default LittleExperienceLogic;