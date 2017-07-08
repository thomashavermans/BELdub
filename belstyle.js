let navknop = document.getElementById('dropdown_nav');
let dropdown = document.getElementsByClassName('dropdown')[0];
let icoon = document.getElementsByClassName('glyphicon')[0];
let teller = 0;

navknop.onclick = function() {
  if (teller == 1) {
    dropdown.style.height = '0px';
    icoon.className = "glyphicon glyphicon-menu-hamburger"
    teller++;
  }
  else {
    dropdown.style.height = '232px';
    icoon.className = "glyphicon glyphicon-remove"
    teller = 1
  }
}


// map navigatie

let buttonnav = document.getElementById('menu-nav');
let navbalk = document.getElementsByClassName('navmap')[0];
let navbalkres = document.getElementsByClassName('navmapres')[0]
let tellernav = 0;

buttonnav.onclick = function() {
  if (tellernav == 1) {
    navbalk.style.opacity = 0;
    navbalk.style.visibility = 'hidden';
    navbalkres.style.opacity = 0;
    navbalkres.style.visibility = 'hidden';
    buttonnav.style.top = '0px';
    buttonnav.innerHTML = 'MENU';
    tellernav++;
  }
  else {
    if (screen.width < '769px') {
      buttonnav.style.top = '80px';
    }
    else {
      buttonnav.style.top = '93px';
    }
    navbalk.style.opacity = 1;
    navbalk.style.visibility = 'visible';
    navbalkres.style.opacity = 1;
    navbalkres.style.visibility = 'visible';
    buttonnav.innerHTML = 'CLOSE';
    tellernav = 1
  }
}
