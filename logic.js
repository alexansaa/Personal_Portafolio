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
    name: 'Multi-Post Stories',
    sub_name: 'CANOPY',
    area_year: ' • Back End Dev • 2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    description_plus: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/Work_Init/WorkHead.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://www.google.com/',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    name: 'Tonic',
    sub_name: 'CANOPY',
    area_year: ' • Back End Dev • 2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    description_plus: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/Work_Init/Works_PopUp.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://www.google.com/',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    name: 'Multi-Post Stories',
    sub_name: 'CANOPY',
    area_year: ' • Back End Dev • 2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    description_plus: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/Work_Init/WorkCard.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://www.google.com/',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    name: 'Tonic',
    sub_name: 'CANOPY',
    area_year: ' • Back End Dev • 2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    description_plus: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/Work_Init/WorkHead.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://www.google.com/',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    name: 'Multi-Post Stories',
    sub_name: 'CANOPY',
    area_year: ' • Back End Dev • 2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    description_plus: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/Work_Init/Works_PopUp.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://www.google.com/',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    name: 'Tonic',
    sub_name: 'CANOPY',
    area_year: ' • Back End Dev • 2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    description_plus: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/Work_Init/WorkCard.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://www.google.com/',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    name: 'Multi-Post Stories',
    sub_name: 'CANOPY',
    area_year: ' • Back End Dev • 2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    description_plus: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/Work_Init/WorkHead.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://www.google.com/',
    sourceLink: 'https://github.com/user/project1',
  },
];
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
  closeCardPopUp.id = 'closeCardAnchor';
  closeCardPopUp.classList.add('icon,left');
  const closeImage = document.createElement('img');
  closeImage.id = 'closeCardImg';
  closeImage.src = 'images/xMenu_50.png';
  closeImage.classList.add('Close,Menu');
  closeCardPopUp.appendChild(closeImage);
  titleContainer.appendChild(myTitle);
  titleContainer.appendChild(closeCardPopUp);
  const listContainer = document.createElement('div');
  listContainer.classList.add('worksListAperable');
  const myWorksList = document.createElement('ul');
  myWorksList.classList.add('aligned-list-card');
  project.technologies.map((tech) => {
    const tmpElement = document.createElement('li');
    tmpElement.textContent = tech;
    myWorksList.appendChild(tmpElement);
    return 0;
  });
  listContainer.appendChild(myWorksList);
  const myContentContainer = document.createElement('div');
  myContentContainer.classList.add('apearableImgContainer');
  const myImg = document.createElement('img');
  myImg.src = project.image;
  const textContainer = document.createElement('div');
  textContainer.classList.add('textcontainer');
  const myDescription = document.createElement('p');
  myDescription.textContent = project.description_plus;
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('worksBtnsAperable');
  const myBtnLive = document.createElement('a');
  myBtnLive.textContent = 'See Live';
  myBtnLive.classList.add('workButtonApereable');
  const myBtnLiveImg = document.createElement('img');
  myBtnLiveImg.src = 'images/Iconos/apereable_icons/arrow.png';
  myBtnLive.appendChild(myBtnLiveImg);
  const myBtnSrc = document.createElement('a');
  myBtnSrc.textContent = 'See Source';
  myBtnSrc.classList.add('workButtonApereable');
  const myBtnSrcImg = document.createElement('img');
  myBtnSrcImg.src = 'images/Iconos/apereable_icons/github.png';
  myBtnSrc.appendChild(myBtnSrcImg);
  closeCardPopUp.addEventListener('click', () => {
    const customDiv = document.querySelector('.custom-div');
    if (customDiv) {
      blureElement.remove();
      customDiv.remove();
    }
  });
  btnContainer.appendChild(myBtnLive);
  btnContainer.appendChild(myBtnSrc);
  textContainer.appendChild(myDescription);
  textContainer.appendChild(btnContainer);
  myContentContainer.appendChild(myImg);
  myContentContainer.appendChild(textContainer);
  customDiv.appendChild(titleContainer);
  customDiv.appendChild(listContainer);
  customDiv.appendChild(myContentContainer);
  document.body.appendChild(blureElement);
  document.body.appendChild(customDiv);
}
document.addEventListener('DOMContentLoaded', () => {
  let count = 0;
  projects.forEach((project, index) => {
    if (count === 0) {
      count += 1;
      const projectsSection = document.querySelector('#centerWork');
      const WorkImage = document.createElement('div');
      WorkImage.classList.add('WorkImage');
      const mainImg = document.createElement('img');
      mainImg.src = project.image;
      mainImg.alt = 'Main Project Image, a Yoga Girl in a pose';
      WorkImage.appendChild(mainImg);
      const contextWork = document.createElement('div');
      contextWork.classList.add('contextWork');
      const worksBody = document.createElement('div');
      worksBody.classList.add('worksBody');
      const myTitleMain = document.createElement('h3');
      myTitleMain.textContent = project.name;
      const myTextMain = document.createElement('p');
      myTextMain.textContent = project.description;
      worksBody.appendChild(myTitleMain);
      worksBody.appendChild(myTextMain);
      const worksList = document.createElement('div');
      worksList.classList.add('worksList');
      const myMainWorkList = document.createElement('ul');
      myMainWorkList.classList.add('aligned-list');
      project.technologies.map((tech) => {
        const tmpElement = document.createElement('li');
        tmpElement.textContent = tech;
        myMainWorkList.appendChild(tmpElement);
        return 0;
      });
      worksList.appendChild(myMainWorkList);
      const workButton = document.createElement('button');
      workButton.type = 'button';
      workButton.textContent = 'See Project';
      workButton.classList.add('workButton');
      workButton.addEventListener('click', (event) => {
        event.stopPropagation();
        renderCustomDiv(index);
      });
      contextWork.appendChild(worksBody);
      contextWork.appendChild(worksList);
      contextWork.appendChild(workButton);
      projectsSection.appendChild(WorkImage);
      projectsSection.appendChild(contextWork);
    } else {
      const projectsSection = document.querySelector('#cardsDiv');
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
      project.technologies.map((tech) => {
        const tmpElement = document.createElement('li');
        tmpElement.textContent = tech;
        myWorksList.appendChild(tmpElement);
        return 0;
      });
      myworksContainer.appendChild(myWorksList);
      const myBtnCard = document.createElement('button');
      myBtnCard.type = 'button';
      myBtnCard.textContent = 'See Project';
      myBtnCard.classList.add('workButtonCard');
      myBtnCard.addEventListener('click', (event) => {
        event.stopPropagation();
        renderCustomDiv(index);
      });
      myCard.appendChild(myTitle);
      myCard.appendChild(myCardTitleConteiner);
      myCard.appendChild(myDescription);
      myCard.appendChild(myworksContainer);
      myCard.appendChild(myBtnCard);
      projectsSection.appendChild(myCard);
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  function validateForm() {
    const myErrorMsj = document.getElementById('validationMsj');
    const myEmail = document.getElementById('faddress').value;
    if (myEmail !== String(myEmail).toLowerCase()) {
      myErrorMsj.textContent = 'Error de Validacion: Email esta en mayusculas!';
    } else {
      myErrorMsj.textContent = 'Enviando!';
      document.getElementById('myForm').submit();
    }
  }
  const form = document.querySelector('#SubmitButton');
  form.addEventListener('click', () => {
    validateForm();
  });
});
document.addEventListener('DOMContentLoaded', () => {
  function preserveChanges(myField, myChange) {
    const data = localStorage.getItem('userData');
    const tmpData = JSON.parse(data);
    tmpData[myField] = myChange;
    const forSave = JSON.stringify(tmpData);
    localStorage.setItem('userData', forSave);
  }
  const myNameInput = document.getElementById('fname');
  myNameInput.addEventListener('input', () => {
    preserveChanges('userName', myNameInput.value);
    return 0;
  });
  const myEmailInput = document.getElementById('faddress');
  myEmailInput.addEventListener('input', () => {
    preserveChanges('email', myEmailInput.value);
    return 0;
  });
  const myTextInpuy = document.getElementById('comment');
  myTextInpuy.addEventListener('input', () => {
    preserveChanges('text', myTextInpuy.value);
  });
});

window.onload = function initDataPreserv() {
  const userData = localStorage.getItem('userData');
  if (userData === null) {
    const createData = { userName: 'FullName', email: 'Email Address', text: 'my text' };
    
    localStorage.setItem('userData', storeD);
  } else {
    const tmpData = JSON.parse(userData);
    const myNameInput = document.getElementById('fname');
    myNameInput.value = tmpData.userName;
    const myEmailInput = document.getElementById('faddress');
    myEmailInput.value = tmpData.email;
    const myTextInput = document.getElementById('comment');
    myTextInput.value = tmpData.text;
  }
};
