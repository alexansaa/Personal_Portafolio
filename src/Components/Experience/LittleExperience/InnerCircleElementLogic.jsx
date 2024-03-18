import style from '../../../styles/CircleElement.module.css';

const InnerCircleElementLogic = ({ element, startAngle, index }) => {
  const clampedRotationAngle = Math.min(Math.max(startAngle, 0), 360);

  return (
    <div key={index} className={`${style.fancyElement} ${style.fancyElement_innerRotation}`}
      style={{ '--start-angle': `${clampedRotationAngle}deg` }}>
      <img src={element.img} alt={element.alt} className={`${element.direction === 'anti-clockwise' ? style.fancyElement_selfAntiClockRotation : style.fancyElement_selfClockRotation}`} />
    </div>
  );
};

export default InnerCircleElementLogic;