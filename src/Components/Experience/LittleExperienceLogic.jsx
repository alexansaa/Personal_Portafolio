import style from '../../styles/LittleExperience.module.css';
import cloudRed from '../../assets/red_cloud_transparent.png';

import InnerCircleElement from './InnerCircleElementLogic';
import OuterCircleElement from './OuterCircleElementLogic';

// elementos inner circle
import aws from '../../assets/inner circle/AWS.png';
import azure from '../../assets/inner circle/azure.png';
import network from '../../assets/inner circle/networking.png';
import docker from '../../assets/inner circle/docker.png';
import kubernetes from '../../assets/inner circle/kubernetes.png';

// elements outer circle
import flask from '../../assets/outer circle/flask.png';
import perl from '../../assets/outer circle/perl.png';
import python from '../../assets/outer circle/python.png';
import angular from '../../assets/outer circle/angular.png';
import csharp from '../../assets/outer circle/CSharp.png';
import ror from '../../assets/outer circle/rails.png';
import reactIcon from '../../assets/outer circle/react.png';
import cplusplus from '../../assets/outer circle/cplusplus.png';
import ruby from '../../assets/outer circle/ruby.png';
import css from '../../assets/outer circle/css.png';
import html from '../../assets/outer circle/html.png';
import java from '../../assets/outer circle/java.png';
import javascript from '../../assets/outer circle/javascript.png';
import agile from '../../assets/space/agile.png';

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
  // 'space': {
  //   'DevOps': {'direction': 'anti-clockwise', 'img': devops, 'alt': 'DevOps'},
  //   'Scrum': {'direction': 'clockwise', 'img': scrum, 'alt': 'Scrum'},
  //   'Agile': {'direction': 'anti-clockwise', 'img': agile, 'alt': 'Agile'},
  //   'Figma': {'direction': 'clockwise', 'img': figma, 'alt': 'Figma'},
  //   'GitHub': {'direction': 'anti-clockwise', 'img': github, 'alt': 'GitHub'},
  //   'AI/ML': {'direction': 'clockwise', 'img': aiml, 'alt': 'Artificial Inteligence and Machine Learning'},
  //   'Inventor': {'direction': 'anti-clockwise', 'img': inventor, 'alt': 'Inventor'},
  //   'Revit': {'direction': 'clockwise', 'img': revit, 'alt': 'Revit'},
  //   'AutoCad': {'direction': 'anti-clockwise', 'img': autocad, 'alt': 'AutoCad'},
  //   'Clean-Energy': {'direction': 'clockwise', 'img': cleanenergy, 'alt': 'Clean Energy'},
  //   'Digital-Twins': {'direction': 'anti-clockwise', 'img': digitaltwins, 'alt': 'Digital Twins'},
  //   'Simulations': {'direction': 'clockwise', 'img': simulations, 'alt': 'Simulations'},
  //   'Projects': {'direction': 'anti-clockwise', 'img': projects, 'alt': 'Projects'},
  //   'Sales': {'direction': 'clockwise', 'img': sales, 'alt': 'Sales'},
  // }
};

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
        {/* <div className={`${style.spaceElement} ${style.font_roboto} ${style.lilExp_bold} ${style.space_rotation_anticlock_left}`}>
          <div className={`${style.spaceElement_align} ${style.spaceElement_left_fixRotate}`}>
            <img src={agile} alt='agile methodology'/> Scrum
          </div>
        </div> */}
      </div>
    </div>
  )
};

export default LittleExperienceLogic;