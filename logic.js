function sandwitchClick() {
  var myIconContainer = document.getElementById("menuHamburgerContainer");
  var myLogo = document.getElementById("homeLogo_Angosto");
  var myIcon = document.getElementById("baraMenuImage");
  var myIconClose = document.getElementById("closeMenuImage");
  var myHeaderContainer = document.getElementById("topBar");
  var myLinks = document.getElementById("myLinks");
  if (myLinks.style.display === "flex") {
    myLinks.style.display = "none";
    myHeaderContainer.setAttribute("style", "flex-direction: row;");
    myIcon.style.display = "block";
    myIconClose.style.display = "none";
    myLogo.style.display = "block";
  } else {
    myLinks.style.display = "flex";
    myHeaderContainer.setAttribute("style", "flex-direction: column;");
    myIcon.style.display = "none";
    myIconClose.style.display = "block";
    myLogo.style.display = "none";
  }
}