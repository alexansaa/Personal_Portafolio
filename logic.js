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
    name: 'Multi-Card Project',
    sub_name: 'Concert',
    area_year: ' • Front End Dev • 2023',
    description: "Information of different JSON objects gathered within an array is dynamically displayed and rendered into the web page. These elements may fulfill different requirements depending on the objective of the website. Styling may be applied depending on the client's requirements.",
    description_plus: 'JSON Objects have the feature to be dynamic in their composition. An array of objects may carry lots of attributes per element, and these objects may not need to have a specific list of attributes, but they are required to the code to work. In this sense, one may use these features to keep adding information to your web page and use that information all across the website!',
    image: 'ProjectImages/MultiCard.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://alexansaa.github.io/ConcertAdv/',
    sourceLink: 'https://github.com/alexansaa/ConcertAdv',
  },
  {
    name: 'Fit All Viewport',
    sub_name: 'Concert',
    area_year: ' • Front End Dev • 2023',
    description: 'This website is able to fit the size of a wide range of viewport sizes. By making it responsible and with a good range of viewport brake points I have managed to develop a great friendly and responsive user interface that makes your application look bold and shiny.',
    description_plus: 'Responsiveness mixed with good viewport breakpoints set is key to developing web applications able to fit almost every screen device. Nowadays there are a lot of different screen sizes that need to be fitted, this project is meant to show the coding abilities required to build friendly, good-looking, and responsive web pages. Personalization is the key word in this web page, as you can see, many awesome personalized features have been implemented all across the site. Please feel free to try it out!',
    image: 'ProjectImages/Responsive_Multi_Viewport.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://alexansaa.github.io/ConcertAdv/',
    sourceLink: 'https://github.com/alexansaa/ConcertAdv',
  },
  {
    name: 'LocalStorage Mgmt',
    sub_name: 'ToDo List',
    area_year: ' • Front End Dev • 2023',
    description: "The features implemented in this project have to do with data manipulation at the front end. This means storing data in the client's browser which enables us to have a web application with better performance and quicker loading times.",
    description_plus: "Navigation also has to do with correctly managing data loaded and saved locally. This feature could help us to ensure security issues and to give one more layer of protection to the net and the back end. Saving data to local storage means managing data with the use of JSON objects. Sending and receiving data through the web also means securely managing data, so that no vulnerabilities may leak any important information across the application.",
    image: 'ProjectImages/ToDoList.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://alexansaa.github.io/To-Do_List/',
    sourceLink: 'https://github.com/alexansaa/To-Do_List',
  },
  {
    name: 'Design & Storage',
    sub_name: 'CANOPY',
    area_year: ' • Back End Dev • 2015',
    description: 'LocalStorage may be used in many ways, one of which is to make web apps load quickly and the application develops better.',
    description_plus: 'Having part of the web page already saved locally, then remote serves have the chance to send more data with less effort. Navigation turns out to be even easier and with less cost than the classical web development approach.',
    image: 'ProjectImages/BookShelf.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://alexansaa.github.io/LibraryApp/',
    sourceLink: 'https://github.com/alexansaa/LibraryApp',
  },
  {
    name: 'Financial Life App',
    sub_name: 'Movile App',
    area_year: ' • Full Stack Dev • 2023',
    description: 'This applications keeps track of any expenses sorte by categories. You can take controll of your financial life with ease using this application.',
    description_plus: 'You can use this app on your desktop as well as on your phone. Log In to your new profile and take a look at all of the awsome features this application brings. RoR technology let us manage the technology stack quickly and easily. Please feel free to try it out!',
    image: 'ProjectImages/FinancialLife.jpg',
    technologies: ['Ruby On Rails', 'HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://financiallifeapp.onrender.com/',
    sourceLink: 'https://github.com/alexansaa/FinancialLife.git',
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
  closeImage.classList.add('Close');
  closeImage.classList.add('Menu');
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
  myBtnLive.href = project.liveLink;
  myBtnLive.textContent = 'See Live';
  myBtnLive.classList.add('workButtonApereable');
  const myBtnLiveImg = document.createElement('img');
  myBtnLiveImg.src = 'images/Iconos/apereable_icons/arrow.png';
  myBtnLive.appendChild(myBtnLiveImg);
  const myBtnSrc = document.createElement('a');
  myBtnSrc.textContent = 'See Source';
  myBtnSrc.href = project.sourceLink
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
    const storeD = JSON.stringify(createData);
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
