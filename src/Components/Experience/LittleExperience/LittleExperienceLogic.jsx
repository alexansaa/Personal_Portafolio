import style from '../../../styles/LittleExperience.module.css';
import cloudRed from '../../../assets/red_cloud_transparent.png';

import InnerCircleElement from './InnerCircleElementLogic';
import OuterCircleElement from './OuterCircleElementLogic';
import SpaceElement from './SpaceElementLogic';

// elementos inner circle
import aws from '../../../assets/inner circle/AWS.png';
import azure from '../../../assets/inner circle/azure.png';
import network from '../../../assets/inner circle/networking.png';
import docker from '../../../assets/inner circle/docker.png';
import kubernetes from '../../../assets/inner circle/kubernetes.png';

// elements outer circle
import flask from '../../../assets/outer circle/flask.png';
import perl from '../../../assets/outer circle/perl.png';
import python from '../../../assets/outer circle/python.png';
import angular from '../../../assets/outer circle/angular.png';
import csharp from '../../../assets/outer circle/CSharp.png';
import ror from '../../../assets/outer circle/rails.png';
import reactIcon from '../../../assets/outer circle/react.png';
import cplusplus from '../../../assets/outer circle/cplusplus.png';
import ruby from '../../../assets/outer circle/ruby.png';
import css from '../../../assets/outer circle/css.png';
import html from '../../../assets/outer circle/html.png';
import java from '../../../assets/outer circle/java.png';
import javascript from '../../../assets/outer circle/javascript.png';

// elements space
import devops from '../../../assets/space/devops.png';
import scrum from '../../../assets/space/scrum.png';
import agile from '../../../assets/space/agile.png';
import figma from '../../../assets/space/figma.png';
import github from '../../../assets/space/github.png';
import ai from '../../../assets/space/ai.png';
import ml from '../../../assets/space/ml.png';
import inventor from '../../../assets/space/Inventor.png';
import revit from '../../../assets/space/revit.png';
import autocad from '../../../assets/space/autocad.png';
import cleanenergy from '../../../assets/space/clean_energy.png';
import digitaltwins from '../../../assets/space/digital twins.png';
// import simulations from '../../../assets/space/simulations.png';
import projects from '../../../assets/space/project.png';
import sales from '../../../assets/space/sales.png';

const elements = {
  innerCircle: [
    { direction: 'clockwise', img: aws, alt: 'AWS' },
    { direction: 'anti-clockwise', img: azure, alt: 'MsAzure' },
    { direction: 'clockwise', img: network, alt: 'Network' },
    { direction: 'anti-clockwise', img: docker, alt: 'Docker' },
    { direction: 'clockwise', img: kubernetes, alt: 'Kubernetes' },
  ],
  outerCircle: [
    {direction: 'clockwise', img: flask, alt: 'Flask'},
    {direction: 'anti-clockwise', img: perl, alt: 'Perl'},
    {direction: 'clockwise', img: python, alt: 'Python'},
    {direction: 'anti-clockwise', img: angular, alt: 'Angular'},
    {direction: 'clockwise', img: csharp, alt: 'CSharp'},
    {direction: 'anti-clockwise', img: ror, alt: 'Ruby on Rails'},
    {direction: 'clockwise', img: reactIcon, alt: 'React'},
    {direction: 'anti-clockwise', img: cplusplus, alt: 'C plus plus'},
    {direction: 'clockwise', img: ruby, alt: 'Ruby'},
    {direction: 'anti-clockwise', img: css, alt: 'CSS'},
    {direction: 'clockwise', img: html, alt: 'HTML'},
    {direction: 'anti-clockwise', img: java, alt: 'Java'},
    {direction: 'clockwise', img: javascript, alt: 'JavaScript'},
  ],
  space: [
    {direction: 'anti-clockwise', img: devops, alt: 'DevOps', config: 'L1', total: 2, innerIndex: 0},
    {direction: 'anti-clockwise', img: ml, alt: 'Machine Learning', config: 'L1', total: 2, innerIndex: 1},
    // {direction: 'clockwise', img: simulations, alt: 'Simulations', config: 'L1', total: 14},

    {direction: 'clockwise', img: github, alt: 'GitHub', config: 'L2', total: 2, innerIndex: 0},
    {direction: 'clockwise', img: cleanenergy, alt: 'Clean Energy', config: 'L2', total: 2, innerIndex: 1},

    {direction: 'anti-clockwise', img: agile, alt: 'Agile', config: 'L3', total: 3, innerIndex: 0},
    {direction: 'anti-clockwise', img: revit, alt: 'Revit', config: 'L3', total: 3, innerIndex: 1},
    {direction: 'anti-clockwise', img: sales, alt: 'Sales', config: 'L3', total: 3, innerIndex: 2},

    {direction: 'clockwise', img: figma, alt: 'Figma', config: 'R1', total: 2, innerIndex: 0},
    {direction: 'clockwise', img: autocad, alt: 'AutoCad', config: 'R1', total: 2, innerIndex: 1},

    {direction: 'anti-clockwise', img: scrum, alt: 'Scrum', config: 'R2', total: 2, innerIndex: 0},
    {direction: 'anti-clockwise', img: inventor, alt: 'Inventor', config: 'R2', total: 2, innerIndex: 1},
    
    {direction: 'clockwise', img: projects, alt: 'Projects', config: 'R3', total: 3, innerIndex: 0},
    {direction: 'clockwise', img: ai, alt: 'Artificial Inteligence', config: 'R3', total: 3, innerIndex: 1},
    {direction: 'clockwise', img: digitaltwins, alt: 'Digital Twins', config: 'R3', total: 3, innerIndex: 2},
  ]
};

const LittleExperienceLogic = () => {
  return (
    <div className={style.lilExp_cnt}>
      <div className={`${style.littleExperience_title} ${style.font_roboto}`}>
        Taking information to a whole new real-world interconnection level.
      </div>
      <div className={style.bg_light}>
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
        {Object.values(elements.innerCircle).map((element, index) => {
          const n = Object.values(elements.innerCircle).length;
          const rotationAngle = (360 / n) * index;
          return <InnerCircleElement element={element} startAngle={rotationAngle} key={index} />
        })}

        {/* elementos outer circle */}
        {Object.values(elements.outerCircle).map((element, index) => {
          const n = Object.values(elements.outerCircle).length;
          const rotationAngle = (360/n) * index;
          return <OuterCircleElement element={element} startAngle={rotationAngle} key={index}/>
        })}

        {/* elementos de espacio */}
        {Object.values(elements.space).map((element, myIndex) => {
          return <SpaceElement element={element} key={myIndex} index={element.innerIndex}/>
        })}
      </div>
    </div>
  )
};

export default LittleExperienceLogic;