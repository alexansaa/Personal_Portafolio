function sandwitchClick(){
    var myIconContainer = document.getElementById("menuHamburgerContainer");
    var myLogo = document.getElementById("homeLogo_Angosto");
    var myIcon = document.getElementById("baraMenuImage");
    var myIconClose = document.getElementById("closeMenuImage");
    var myHeaderContainer = document.getElementById("topBar");
    var myLinks = document.getElementById("myLinks");
    if(myLinks.style.display === "flex"){
        myLinks.style.display = "none";
        //myLinks.setAttribute("order: 1;");
        myHeaderContainer.setAttribute("style","flex-direction: row;");
        //myIconContainer.setAttribute("order: 2;");
        myIcon.style.display = "block";
        myIconClose.style.display = "none";
        myLogo.style.display = "block";
    }else{
        myLinks.style.display = "flex";
        //myLinks.setAttribute("order: 2;");
        myHeaderContainer.setAttribute("style","flex-direction: column;");
        //myIconContainer.setAttribute("order: 1;");

        //myIcon.src = "images/xMenu_50.png";
        myIcon.style.display = "none";
        myIconClose.style.display = "block";
        myLogo.style.display = "none";
    }
}