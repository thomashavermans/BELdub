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
