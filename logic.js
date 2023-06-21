document.addEventListener('DOMContentLoaded', () => {
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
});
