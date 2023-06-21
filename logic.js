document.addEventListener('DOMContentLoaded', () => {
  const linksElements = document.querySelectorAll('#myLinks a');
  const openBtn = document.querySelector('#menuHamburgerContainer');
  const myLinksContainer = document.querySelector('#myLinks');
  const myIcon = document.querySelector('#menuHamburgerContainer');
  const myIconClose = document.querySelector('#closeMenuImage');
  openBtn.addEventListener('click', () => {
    myLinksContainer.classList.add('openable');
    myIcon.classList.add('disaperable');
    myIconClose.classList.add('apearable');
  });
  const closeBtn = document.querySelector('#closeHamburger');
  closeBtn.addEventListener('click', () => {
    myLinksContainer.classList.remove('openable');
    myIcon.classList.remove('disaperable');
  });
  linksElements.forEach((e) => {
    e.addEventListener('click', () => {
      myLinksContainer.classList.remove('openable');
      myIcon.classList.remove('disaperable');
    });
  });
});
const projects = [
  {
    name: "Tonic",
    sub_name: "CANOPY",
    area_year: " • Back End Dev • 2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
    image: "images/Work_Init/Works_PopUp.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://www.google.com/",
    sourceLink: "https://github.com/user/project1"
  },
  {
    name: "Multi-Post Stories",
    sub_name: "CANOPY",
    area_year: " • Back End Dev • 2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
    image: "images/Work_Init/Works_PopUp.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://www.google.com/",
    sourceLink: "https://github.com/user/project1"
  },
  {
    name: "Tonic",
    sub_name: "CANOPY",
    area_year: " • Back End Dev • 2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
    image: "images/Work_Init/Works_PopUp.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://www.google.com/",
    sourceLink: "https://github.com/user/project1"
  },
  {
    name: "Multi-Post Stories",
    sub_name: "CANOPY",
    area_year: " • Back End Dev • 2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
    image: "images/Work_Init/Works_PopUp.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://www.google.com/",
    sourceLink: "https://github.com/user/project1"
  },
  {
    name: "Tonic",
    sub_name: "CANOPY",
    area_year: " • Back End Dev • 2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
    image: "images/Work_Init/Works_PopUp.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://www.google.com/",
    sourceLink: "https://github.com/user/project1"
  },
  {
    name: "Multi-Post Stories",
    sub_name: "CANOPY",
    area_year: " • Back End Dev • 2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required",
    image: "images/Work_Init/Works_PopUp.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://www.google.com/",
    sourceLink: "https://github.com/user/project1"
  }
];
document.addEventListener('DOMContentLoaded', () => {
  const projectsSection = document.querySelector('#cardsDiv')
  projects.forEach((project,index) => {
    const myCard = document.createElement('div');
    myCard.classList.add('card');
    const myTitle = document.createElement('h2');
    myTitle.textContent = project.name;
    const myCardTitleConteiner = document.createElement('div');
    myCardTitleConteiner.classList.add('flexCardTitle');
    const mysubtitle = document.createElement('h3');
    mysubtitle.textContent = project.sub_name;
    const myAreaYear = document.createElement('h4');
    myAreaYear.textContent = project.area_year;
    myCardTitleConteiner.appendChild(mysubtitle);
    myCardTitleConteiner.appendChild(myAreaYear);
    const myDescription = document.createElement('p');
    myDescription.textContent = project.description;
    const myworksContainer = document.createElement('div');
    myworksContainer.classList.add('worksListCard');
    const myWorksList = document.createElement('ul');
    myWorksList.classList.add('aligned-list-card');
    project.technologies.map(tech => {
      const tmpElement = document.createElement('li');
      tmpElement.textContent = tech;
      myWorksList.appendChild(tmpElement);
    });
    myworksContainer.appendChild(myWorksList);
    const myBtnClo = document.createElement('button');
    myBtnClo.id = 'customBtn' + index;
    myBtnClo.type = 'button';
    myBtnClo.textContent = 'See Project';
    myBtnClo.classList.add('workButtonCard');
    myBtnClo.addEventListener('click', (event) => {
      event.stopPropagation();
      renderCustomDiv(index);
    });
    myCard.appendChild(myTitle);
    myCard.appendChild(myCardTitleConteiner)
    myCard.appendChild(myDescription)
    myCard.appendChild(myworksContainer)
    myCard.appendChild(myBtnClo)
    projectsSection.appendChild(myCard);
  });
});
// document.addEventListener('DOMContentLoaded', () => {

// });
function renderCustomDiv(projectIndex) {
  const blureElement = document.createElement('div');
  blureElement.classList.add('blureStyle');
  const project = projects[projectIndex];
  const customDiv = document.createElement('div');
  customDiv.classList.add('custom-div');
  customDiv.classList.add('apearable');
  const titleContainer = document.createElement('div');
  titleContainer.classList.add('titleAppear');
  const myTitle = document.createElement('h2');
  myTitle.textContent = project.name;
  const closeCardPopUp = document.createElement('a');
  closeCardPopUp.id = "closeCardAnchor";
  closeCardPopUp.href = "javascript:void(0);";
  closeCardPopUp.classList.add('icon,left');
  const closeImage =  document.createElement('img');
  closeImage.id = "closeCardImg";
  closeImage.src = "images/xMenu_50.png";
  closeImage.classList.add("Close,Menu");
  closeCardPopUp.appendChild(closeImage);
  titleContainer.appendChild(myTitle);
  titleContainer.appendChild(closeCardPopUp);
  const listContainer = document.createElement('div');
  listContainer.classList.add('worksListAperable');
  const myWorksList = document.createElement('ul');
  myWorksList.classList.add('aligned-list-card');
  project.technologies.map(tech => {
    const tmpElement = document.createElement('li');
    tmpElement.textContent = tech;
    myWorksList.appendChild(tmpElement);
  });
  listContainer.appendChild(myWorksList);
  const myImg = document.createElement('img');
  myImg.src = project.image;
  const myDescription = document.createElement('p');
  myDescription.textContent = project.description;
  const myBtnLive = document.createElement('button');
  myBtnLive.textContent = 'See Live';
  myBtnLive.classList.add('workButton');
  const myBtnSrc = document.createElement('button');
  myBtnSrc.textContent = 'See Source';
  myBtnSrc.classList.add('workButton');
  closeCardPopUp.addEventListener('click', () => {
    console.log('close');
    const customDiv = document.querySelector('.custom-div');
    if (customDiv) {
      blureElement.remove();
      customDiv.remove();
    }
  });
  customDiv.appendChild(titleContainer);
  customDiv.appendChild(listContainer);
  customDiv.appendChild(myImg);
  customDiv.appendChild(myDescription);
  customDiv.appendChild(myBtnLive);
  customDiv.appendChild(myBtnSrc);
  document.body.appendChild(blureElement);
  document.body.appendChild(customDiv);
}
