import style from '../../styles/SpaceElement.module.css';

const configuration = {
  L1: {RadStart: 220, RadEnd: 150, Radii: 280, Config: 'left'},
  L2: {RadStart: 205, RadEnd: 155, Radii: 415, Config: 'left'},
  L3: {RadStart: 200, RadEnd: 160, Radii: 550, Config: 'left'},
  R1: {RadStart: 320, RadEnd: 30, Radii: 280, Config: 'right'},
  R2: {RadStart: 335, RadEnd: 25, Radii: 415, Config: 'right'},
  R3: {RadStart: 340, RadEnd: 20, Radii: 550, Config: 'right'},
};

const SpaceElementLogic = ({ element, index }) => {
  let myConfig = {RadStart: 220, RadEnd: 150, Radii: 280, Config: 'left'};

  switch (element.config) {
    case 'L1':
      myConfig = configuration.L1;
      break;
    case 'L2':
      myConfig = configuration.L2;
      break;
    case 'L3':
      myConfig = configuration.L3;
      break;
    case 'R1':
      myConfig = configuration.R1;
      break;
    case 'R2':
      myConfig = configuration.R2;
      break;
    case 'R3':
      myConfig = configuration.R3;
      break;
    default:
      console.log('Sorry there is not such configuration');
  };
  
  let startAngle = 0;
  let deltaDegre = 0;

  // console.log(myConfig);
  
  if(myConfig.RadStart > 0 && myConfig.RadStart < 90 ) {
    deltaDegre = (360 - myConfig.RadEnd + myConfig.RadStart)/element.total;
    startAngle = myConfig.RadStart - (deltaDegre * index);
  } 
  if (myConfig.RadStart > 90 && myConfig.RadStart < 180 ) {
    deltaDegre = (myConfig.RadEnd - myConfig.RadStart)/element.total;
    startAngle = myConfig.RadStart + (deltaDegre * index);
  }
  if (myConfig.RadStart > 180 && myConfig.RadStart < 270 ) {
    deltaDegre = (myConfig.RadStart - myConfig.RadEnd)/element.total;
    startAngle = myConfig.RadStart - (deltaDegre * index);
  }
  if (myConfig.RadStart > 270 && myConfig.RadStart < 360 ) {
    deltaDegre = (360 - myConfig.RadStart + myConfig.RadEnd)/element.total;
    startAngle = myConfig.RadStart + (deltaDegre * index);
    console.log("rad start: " + myConfig.RadStart);
    console.log("delta total: " + deltaDegre * index);
    console.log('config element: ' + element.alt + ' ' + element.config + ' delta->' + deltaDegre + ' start Angle: ' + startAngle);
  }
  
  // console.log('Mi radii: ' + myConfig.Radii);
  // console.log('delta degree: ' + deltaDegre);
  // console.log('index: ' + index);
  // console.log('start angle: ' + startAngle);
  // console.log('element tag: ' + element.alt);
  // console.log('element key: ' + `${index}-${element.alt}`);
  
  const rotationClass = `space_rotation-${element.direction}-${myConfig.Config}`;
  const uniqueKey = `${index}-${element.alt}`;
  
  return (
    <div key={uniqueKey} className={`${style.spaceElement} ${style.font_roboto} ${style.spaceElement_bold} ${style[rotationClass]} `}
    style={{
      '--start-angle': `${startAngle}deg`, 
      '--radii-level': `${myConfig.Radii}px`,
      '--rad-Start': `${myConfig.RadStart}deg`,
      '--rad-End': `${myConfig.RadEnd}deg`
    }}>
      <div className={`${style.spaceElement_align} ${myConfig.Config === 'left' ? style.spaceElement_left_fixRotate : ''}`}>
        <img src={element.img} alt={element.alt}/> {element.alt}
      </div>
    </div>
  );
};

export default SpaceElementLogic;