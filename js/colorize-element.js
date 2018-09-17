'use strict';
window.colorizeElement = (function(evtColorize, color) {
  var userCoat = document.querySelector('.wizard-coat');
  var userEyes = document.querySelector('.wizard-eyes');
  var userFireball = document.querySelector('.setup-fireball');
  var number = 0;
  var currentElement = evtColorize.target;

  function generateRandomNumber(min, max) {
      return Math.floor((Math.random() * (max - min) + 1) + min);
    };

  switch(currentElement){
    case userCoat:
    case userEyes:
    number  =  generateRandomNumber(0, color.length - 1);
    var currentColor = color[number];
    currentElement.style.fill = currentColor;
    break;

    case userFireball:
    number  = generateRandomNumber(0, color.length - 1);
    var currentColor = color[number];
    currentElement.style.backgroundColor = currentColor;
    break;
  }
});
