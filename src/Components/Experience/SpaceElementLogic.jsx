import style from '../../styles/SpaceElement.module.css';

const SpaceElementLogic = ({ element, startAngle, index }) => {
  const clampedRotationAngle = Math.min(Math.max(startAngle, 0), 360);
  return (
    <div key={index} className={`${style.spaceElement} ${style.font_roboto} ${style.lilExp_bold} ${style.space_rotation_anticlock_left}`}>
      <div className={`${style.spaceElement_align} ${style.spaceElement_left_fixRotate}`}>
        <img src={element.src} alt={element.alt} /> {element.alt}
      </div>
    </div>
  );
};

export default SpaceElementLogic;